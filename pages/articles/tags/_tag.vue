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
  }
};
</script>

<style></style>
