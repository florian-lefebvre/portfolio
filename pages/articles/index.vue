<template>
  <div>
    <ContentHeader title="Articles" :folder="folder" :buttons="buttons" />
    <ContentIndex :folder="folder" />
  </div>
</template>

<script>
import getSiteMeta from "@/utils/getSiteMeta";

export default {
  data() {
    let folder = "articles";
    return {
      folder: folder,
      buttons: [
        {
          text: "All Tags",
          url: `/${folder}/tags`
        }
      ]
    };
  },
  head() {
    return {
      title: "Articles",
      meta: [...this.meta]
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: "Articles",
        description: "Articles about development, tips...",
        url: `${this.$store.state.infos.siteUrl}/articles`
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
