<template>
  <div class="z-10 bg-gray-800/50 py-16 md:py-20" id="contact">
    <Container>
      <h2 class="title">
        {{ $t("pages.contact.title1") }}
        <span class="text-gradient bg-gradient inline-block font-semibold">{{
          $t("pages.contact.title2")
        }}</span>
      </h2>
      <div class="flex flex-col justify-between sm:flex-row sm:space-x-6">
        <div class="max-w-3xl text-gray-200 md:text-lg">
          <p class="mb-10">
            {{ $t("pages.contact.description") }}
          </p>
        </div>
        <Alert>{{ $t("pages.contact.warning") }}</Alert>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <NuxtLink
          v-for="link in social"
          :to="link.url(link.username)"
          target="_blank"
          class="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 text-white transition-colors hover:bg-gray-700"
        >
          <Icon :icon="link.icon" class="h-12 w-12" />
          <div class="mt-2 text-center font-semibold sm:text-xl">
            {{ link.username }}
          </div>
        </NuxtLink>
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
            <NuxtLink
              v-for="link in social"
              :to="link.url(link.username)"
              target="_blank"
              class="text-gray-400 transition-colors hover:text-white"
            >
              <Icon :icon="link.icon" class="h-5 w-5" monochrome />
            </NuxtLink>
          </div>
        </div>
        <div class="mt-12 flex space-x-16 md:ml-8 md:mt-0">
          <div v-for="category in categories">
            <div class="mb-2 font-semibold uppercase text-gray-600">
              {{ category.name }}
            </div>
            <div class="space-y-1">
              <NuxtLink
                :to="link.url"
                class="block text-gray-400 transition-colors hover:text-white"
                v-for="link in category.links"
              >
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="my-6 h-px bg-gray-600"></div>
      <p
        class="mx-auto text-center text-gray-400"
        v-html="$t('global.footer.rights')"
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
import { FooterCategory, Link } from "~/types";
import { useI18n } from "vue-i18n";

const { firstName, lastName, social } = useMe();
const { t, tm } = useI18n();

const categories = computed<FooterCategory[]>(() => [
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
  --b2: theme("colors.primary.600") !important;
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
