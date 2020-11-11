<template>
  <div>
    <ContentHeader title="Articles" :folder="folder" :buttons="buttons" />
    <ContentIndex :folder="folder" />
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
          text: "All Tags",
          url: `/${folder}/tags`
        }
      ]
    };
  },
};
</script>

<style></style>
