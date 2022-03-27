<template>
  <div>
    <Container class="py-16 md:py-20">
      <h1 class="title font-semibold">
        {{ $t("pages.legal.notices.title1") }}
        <span class="bg-gradient text-gradient inline-block">{{
          $t("pages.legal.notices.title2")
        }}</span>
      </h1>
      <Prose class="mt-10" :content="content" />
    </Container>
  </div>
</template>

<script setup lang="ts">
import { render } from "~/utils/mdit";
import page from "~/data/content/notices.md?raw";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const content = render(page);

useSeo({
  title: t("pages.legal.notices.seo.title"),
  description: t("pages.legal.notices.seo.description"),
});
</script>
