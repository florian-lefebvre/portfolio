<template>
  <div>
    <Container class="bg-blue-500">
      <div class="prose prose-invert">
        <ul>
          <li>description + hobbies</li>
          <li>techs</li>
          <li>education</li>
        </ul>
      </div>
    </Container>
    <Container class="py-16 md:py-20" id="about">
      <h2 class="title">
        {{ $t("pages.about.introduction.title1") }}
        <span
          class="bg-gradient text-gradient block font-semibold md:inline-block"
        >
          {{ $t("pages.about.introduction.title2") }}
        </span>
      </h2>
      <div class="text-gray-200 md:text-lg">
        <p class="mb-10 max-w-3xl">
          {{ $t("pages.about.introduction.shortDescription") }}
        </p>
        <p class="max-w-5xl">
          <!-- <component :is="$t('pages.about.introduction.longDescription')" /> -->
          {{ $t("pages.about.introduction.longDescription") }}
          {{ x }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

useSeo({
  title: "About me",
});

const { t } = useI18n();
const x = t("pages.about.introduction.longDescription");
</script>
