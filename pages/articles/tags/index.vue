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
  }
};
</script>

<style></style>
