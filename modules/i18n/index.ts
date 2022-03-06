import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
import consola from "consola";

export default defineNuxtModule({
  async setup(options, nuxt) {
    consola.info("[I18N] Setup module");
    const resolver = createResolver(import.meta.url);
    addPlugin({
      src: await resolver.resolvePath("./plugin.ts"),
      mode: "all",
    });
    nuxt.hook("autoImports:extend", (imports) => {
      imports.push({
        name: "useI18n",
        as: "useI18n",
        from: "vue-i18n",
      });
    });
    consola.success("[I18N] Setup module done");
  },
});
