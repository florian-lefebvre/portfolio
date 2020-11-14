<template>
  <div>
    <ContentHeader title="My work" :folder="folder" :buttons="buttons" />
    <ContentIndex :folder="folder" />
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
          text: "All Tags",
          url: `/${folder}/tags`
        }
      ]
    };
  },
  head() {
    return {
      title: "Work",
      meta: [...this.meta]
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: "Work",
        description: "All the projects I have done.",
        url: `${this.$store.state.infos.siteUrl}/work`
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
