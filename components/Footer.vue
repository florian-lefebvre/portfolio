<template>
  <div class="z-10 bg-gray-800/50 py-16 md:py-20" id="contact">
    <Container>
      <h2 class="title">
        Get in
        <span class="text-gradient bg-gradient inline-block font-semibold"
          >touch</span
        >
      </h2>
      <div class="max-w-3xl text-gray-200 md:text-lg">
        <p class="mb-10">
          If you wish to talk, or chat about an existing / upcoming project,
          feel free to reach out with any of the below methods.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <a
          v-for="link in social"
          :href="link.url(link.username)"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 text-white transition-colors hover:bg-gray-700"
        >
          <Icon :icon="link.icon" class="h-12 w-12" />
          <div class="mt-2 text-center font-semibold sm:text-xl">
            {{ link.username }}
          </div>
        </a>
      </div>
    </Container>
  </div>
  <div class="z-0 mt-auto bg-gray-900/50 backdrop-blur-md">
    <Container class="pt-16">
      <div class="flex flex-col justify-center md:flex-row md:justify-between">
        <div class="flex flex-col justify-start">
          <div class="mb-6 flex items-center justify-start space-x-4">
            <ProfilePicture />
            <div
              class="flex flex-col items-start justify-center font-semibold leading-5 text-gray-400"
            >
              <div>{{ firstName }}</div>
              <div>{{ lastName }}</div>
            </div>
          </div>
          <div class="mb-4 max-w-lg text-gray-400">
            {{ $t("global.meta.description") }}
          </div>
          <div class="flex items-center space-x-6">
            <a
              v-for="link in social"
              :href="link.url(link.username)"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 transition-colors hover:text-white"
            >
              <Icon :icon="link.icon" class="h-5 w-5" monochrome />
            </a>
          </div>
        </div>
        <div class="mt-12 flex space-x-16 md:ml-8 md:mt-0">
          <div v-for="category in categories">
            <div class="mb-2 font-semibold uppercase text-gray-600">
              {{ category.name }}
            </div>
            <div class="space-y-1">
              <nuxt-link
                :to="link.url"
                class="block text-gray-400 transition-colors hover:text-white"
                v-for="link in category.links"
              >
                {{ link.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="my-6 h-px bg-gray-600"></div>
      <p
        class="mx-auto text-center text-gray-400"
        v-html="$t('global.footer.rights', { date: new Date().getFullYear() })"
      ></p>
      <div id="wcb" class="carbonbadge wcb-d my-6"></div>
      <Script
        src="https://unpkg.com/website-carbon-badges@1.1.1/b.min.js"
        defer
      ></Script>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef } from "nuxt3/dist/app/compat/capi";
import { useI18n } from "vue-i18n";
import { FooterCategory, Link } from "~/types";
const { firstName, lastName, social } = useMe();
const { t, tm } = useI18n();

const categories: ComputedRef<FooterCategory[]> = computed(() => [
  {
    name: t("global.footer.categories.navigation"),
    links: (tm("global.links.navigation") as Link[]).filter((e) => !e.external),
  },
  {
    name: t("global.footer.categories.legal"),
    links: (tm("global.links.legal") as Link[]).filter((e) => !e.external),
  },
]);
</script>

<style>
#wcb {
  --b1: theme("colors.white") !important;
  --b2: theme("colors.primary.500") !important;
}

#wcb_g {
  @apply !bg-gray-800;
}

#wcb_2,
#wcb_a,
#wcb_g {
  font-family: unset !important;
}

#wcb_a {
  @apply transition-all hover:scale-105 hover:rounded-md hover:shadow;
}
</style>
