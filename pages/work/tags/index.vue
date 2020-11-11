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
  }
};
</script>

<style></style>
