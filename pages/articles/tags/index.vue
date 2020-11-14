<template>
  <div>
    <ContentHeader
      title="Articles"
      subtitle="All tags"
      :folder="folder"
      :buttons="buttons"
    />
    <ContentTags :folder="folder" />
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
          text: "All articles",
          url: `/${folder}`
        }
      ]
    };
  },
  head() {
    return {
      title: "All tags - Articles",
      meta: [...this.meta]
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: "All tags - Articles",
        description: "Search articles by tag.",
        url: `${this.$store.state.infos.siteUrl}/articles/tags`
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
