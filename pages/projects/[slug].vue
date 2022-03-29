<template>
  <div>
    <Container v-if="!error" class="py-16 md:py-20">
      <div class="mb-6" ref="header">
        <div
          class="flex flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-6 md:space-y-0"
        >
          <NuxtLink to="/projects" class="button-primary space-x-2">
            <ArrowSmLeftIcon class="-ml-1 h-6 w-6" />
            <span>Back</span>
          </NuxtLink>
          <h1 class="text-5xl font-semibold text-white">
            {{ details.name }}
          </h1>
        </div>
        <div class="mt-2 text-lg text-gray-400">
          {{ details.description }}
        </div>
      </div>
      <div
        class="flex grid-cols-12 flex-col-reverse lg:grid lg:gap-16 xl:gap-8"
      >
        <div class="col-span-12 lg:col-span-8 xl:col-span-9">
          <img
            :src="project.global.imageUrl"
            class="w-full rounded-lg border-2 border-gray-700/25"
            :alt="details.description"
          />
          <Alert title="Work in progress" class="mt-10 w-full"
            >I am currently working on the content. The final version will be
            available in the coming weeks.</Alert
          >
          <div class="text-gray-400 md:text-lg">
            Estimated reading time: {{ details.readingTime }} min
          </div>
          <article>
            <Prose class="mt-10" :content="details.content" />
          </article>
        </div>
        <div class="col-span-12 mb-8 lg:col-span-4 lg:mb-0 xl:col-start-10">
          <div
            class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-lg bg-gray-900 p-4 shadow-md"
          >
            <div
              class="hidden overflow-hidden transition-all lg:block"
              :class="
                show
                  ? 'max-h-96 duration-1000 ease-in-out'
                  : 'linear max-h-0 duration-500'
              "
            >
              <div class="bg-gradient text-gradient text-2xl font-semibold">
                {{ details.name }}
              </div>
              <div class="mb-8 text-gray-400">{{ details.description }}</div>
            </div>
            <div class="grid gap-4">
              <div class="">
                <div class="text-lg font-semibold text-white">Project type</div>
                <div class="mb-4 text-gray-400">
                  {{ details.type }}
                </div>
              </div>
              <div class="">
                <div class="text-lg font-semibold text-white">Technologies</div>
                <div class="mb-4 text-gray-400">
                  {{ project.global.technologies.join(", ") }}
                </div>
              </div>
              <div class="">
                <div class="mb-1 text-lg font-semibold text-white">Links</div>
                <NuxtLink
                  v-for="{ name, url } in project.global.links.concat(
                    details.links
                  )"
                  :to="url"
                  target="_blank"
                  class="flex space-x-4 rounded-lg px-4 py-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                >
                  <Icon
                    :icon="
                      social.find((e) => e.url('').includes('github')).icon
                    "
                    v-if="url.includes('github')"
                    class="-ml-2 h-6 w-6 fill-current"
                  />
                  <ArrowUpIcon class="-ml-2 h-6 w-6 rotate-45" v-else />
                  <span>{{ name }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpIcon, ArrowSmLeftIcon } from "@heroicons/vue/outline";
import { ProjectLocale } from "~/types";
import projects from "~/data/projects";
import { useI18n } from "vue-i18n";

const { social } = useMe();

const route = useRoute();
const { locale } = useI18n();

const project = projects.find(
  (project) => project.locales[locale.value].slug === route.params.slug
);
const error = project === undefined;

if (error) {
  throwError("Project not found");
}

let details: ProjectLocale;
try {
  details = project.locales[locale.value];
} catch (_) {}

useSeo({
  title: error ? "Page not found" : details.name,
  description: error
    ? "The page you are looking for does not exist."
    : details.description,
});

const show = ref<boolean>();
const header = ref<HTMLElement>();
useWindowEventListener(
  "scroll",
  () =>
    (show.value = window.scrollY > 500 && !useElementVisibility(header).value)
);
</script>
