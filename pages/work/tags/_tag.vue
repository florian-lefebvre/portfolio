<template>
  <div>
    <ContentHeader
      title="My work"
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
    let folder = "work";
    return {
      folder: folder,
      buttons: [
        {
          text: "All projects",
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
      title: `#${this.$route.params.tag} - Work`,
      meta: [...this.meta]
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: `#${this.$route.params.tag} - Work`,
        description: `All projects related with #${this.$route.params.tag}`,
        url: `${this.$store.state.infos.siteUrl}/work/tags/${this.$route.params.tag}`
      };
      console.log(this.$route)
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
