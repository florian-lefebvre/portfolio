<template>
  <div>
    <ContentHeader
      title="Articles"
      :subtitle="`#${this.$route.params.tag}`"
      :folder="folder"
      :buttons="buttons"
    />
    <ContentTag :folder="folder" :tag="this.$route.params.tag" />
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
        },
        {
          text: "All Tags",
          url: `/${folder}/tags`
        }
      ]
    };
  },
  head() {
    return {
      title: `#${this.$route.params.tag} - Articles`,
      meta: [...this.meta]
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: `#${this.$route.params.tag} - Articles`,
        description: `All articles related with #${this.$route.params.tag}`,
        url: `${this.$store.state.infos.siteUrl}/articles/tags/${this.$route.params.tag}`
      };
      console.log(this.$route)
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
