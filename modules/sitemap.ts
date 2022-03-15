import { createResolver, defineNuxtModule } from "@nuxt/kit";
import { promises as fsp } from "fs";
import { NuxtPage } from "~/node_modules/@nuxt/kit/node_modules/@nuxt/schema/dist/index";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import consola from "consola";
import { join, dirname } from "path";
import serveStatic from "serve-static";

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
    let routes: NuxtPage[];

    const generateSitemp = async (path: string): Promise<void> => {
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

      const dirPath = dirname(path);
      await fsp.mkdir(dirPath, { recursive: true });

      await fsp.writeFile(path, sitemap);
    };

    const handleSitemapGeneration = async (fn: Function): Promise<void> => {
      try {
        await fn();
        consola.success(`Sitemap generated`);
      } catch (e) {
        consola.error("Error generating sitemap");
      }
    };

    nuxt.hook("pages:extend", async (pages) => {
      routes = pages;
    });

    if (nuxt.options.dev) {
      nuxt.hook("build:done", async (builder) => {
        await handleSitemapGeneration(async () => {
          const resolver = createResolver(import.meta.url);
          const filePath = await resolver.resolvePath("~/.sitemap/sitemap.xml");
          await generateSitemp(filePath);
          // nuxt.options.serverMiddleware.push({
          //   path: "/",
          //   handler: serveStatic(dirname(filePath)),
          // });
        });
      });
    } else {
      nuxt.hook("nitro:generate", async (ctx) => {
        await handleSitemapGeneration(async () => {
          const filePath = join(ctx.output.publicDir, "sitemap.xml");
          await generateSitemp(filePath);
        });
      });
    }
  },
});
