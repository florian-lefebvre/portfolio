import { Vue3Mq } from "vue3-mq";



export default defineNuxtPlugin((nuxtApp) => {
    console.log("Registering vue3-mq plugin");
    nuxtApp.vueApp.use(Vue3Mq, {
        preset: "tailwind"
    });
});