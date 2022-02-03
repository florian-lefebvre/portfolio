import { createI18n, useI18n } from "vue-i18n";
import en from "~/locales/en";
import fr from "~/locales/fr";

type MessageSchema = typeof en;

export default defineNuxtPlugin((nuxtApp) => {
    console.log("Registering i18n plugin");
  const i18n = createI18n<[MessageSchema], "en" | "fr">({
    locale: "en", // TODO: get from cookie
    fallbackLocale: "en",
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
