<template>
  <div>
    <ContentHeader
      title="Articles"
      :folder="folder"
      text="All tags"
      :url="`${folder}/tags`"
    />
    <ContentIndex :folder="folder" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      folder: "articles"
    };
  }
};
</script>

<style></style>
