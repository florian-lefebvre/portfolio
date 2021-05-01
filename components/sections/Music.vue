<template>
  <Section>
    <SectionsTitle title="Music" />
    <div
      xyz="fade delay-6"
      class="bg-gray-300 dark:bg-gray-900 p-10 rounded-3xl sm:text-lg lg:text-xl text-justify xyz-nested"
    >
      I like to play music. I have been playing drums for
      {{ dates.drums }} years, percussion for {{ dates.percus }} years and bass
      guitar for {{ dates.bass }} years in several orchestras and bands:
      <a
        href="https://www.ohf31.fr"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        >l'Orchestre d'Harmonie du Frontonnais</a
      >, the symphonic orchestra of the intermunicipal music school of Fronton
      and
      <a
        href="https://www.instagram.com/legrouperock/"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        >le groupe rock</a
      >.
    </div>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      dates: {
        drums: new Date().getFullYear() - 2010,
        percus: new Date().getFullYear() - 2018,
        bass: new Date().getFullYear() - 2019
      }
    };
  }
};
</script>

<style scoped>
.link {
  @apply italic font-semibold hover:underline;
}
</style>
