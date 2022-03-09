import consola from "consola";
import { createI18n, useI18n } from "vue-i18n";
import en from "~/locales/en";
import fr from "~/locales/fr";
import { AvailableLocales, MessageSchema } from "~/types/i18n";

export default defineNuxtPlugin((nuxtApp) => {
  consola.info("[I18N] Setup plugin");
  const i18n = createI18n<[MessageSchema], AvailableLocales>({
    locale: "en", // TODO: get from cookie
    fallbackLocale: "en",
    globalInjection: true,
    legacy: false,
    messages: {
      en,
      fr,
    },
  });
  nuxtApp.vueApp.use(i18n);
  nuxtApp.hook("vue:setup", () => {
    const { t, n } = useI18n<{ message: MessageSchema }>({
      useScope: "global",
    });
    return { t, n };
  });
});
