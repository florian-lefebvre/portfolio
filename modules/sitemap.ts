import { createResolver, defineNuxtModule } from "@nuxt/kit";
import { promises as fsp } from "fs";
import { NuxtPage } from "~/node_modules/@nuxt/kit/node_modules/@nuxt/schema/dist/index";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import consola from "consola";

interface Options {
  hostname: string;
  dynamicRoutes: Promise<string[]> | string[];
}

const DEFAULTS: Options = {
  hostname: "http://localhost:3000",
  dynamicRoutes: [],
};

export default defineNuxtModule({
  meta: {
    name: "sitemap",
    version: "0.0.1",
    configKey: "sitemap",
    compatibility: {
      bridge: false,
    },
  },
  defaults: DEFAULTS,
  async setup(options, nuxt) {
    if (nuxt.options.dev) {
      consola.warn("Sitemap module is not compatible with dev mode");
      return;
    }

    let routes: NuxtPage[];

    nuxt.hook("pages:extend", async (pages) => {
      routes = pages;
    });

    nuxt.hook("build:done", async (builder) => {
      const resolver = createResolver(import.meta.url);
      const filePath = await resolver.resolvePath(
        "~/.output/public/sitemap.xml"
      );

      const sitemapRoutes: string[] = [
        ...routes
          .filter((route) => !route.path.includes(":"))
          .map((route) => route.path),
        ...(await options.dynamicRoutes),
      ];

      const sitemapConfig = {
        hostname: options.hostname,
        urls: sitemapRoutes,
      };

      const stream = new SitemapStream(sitemapConfig);
      const sitemap = await streamToPromise(
        Readable.from(sitemapConfig.urls).pipe(stream)
      ).then((data) => data.toString());

      await fsp.writeFile(filePath, sitemap);

      consola.success(`Sitemap generated at ${filePath}`);
    });
  },
});
