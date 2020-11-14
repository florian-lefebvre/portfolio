<template>
  <div>
    <ContentHeader
      title="My work"
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
    let folder = "work";
    return {
      folder: folder,
      buttons: [
        {
          text: "All projects",
          url: `/${folder}`
        }
      ]
    };
  },
  head() {
    return {
      title: "All tags - Work",
      meta: [...this.meta]
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: "All tags - Work",
        description: "Search projects by tag.",
        url: `${this.$store.state.infos.siteUrl}/work/tags`
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
