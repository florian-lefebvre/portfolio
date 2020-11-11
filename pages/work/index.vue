<template>
  <div>
    <ContentHeader
      title="My work"
      :folder="folder"
      text="All tags"
      :url="`${folder}/tags`"
    />
    <ContentIndex :folder="folder" />
  </div>
</template>

<script>
import getSiteMeta from "@/utils/getSiteMeta";
const meta = getSiteMeta();

export default {
  data() {
    return {
      folder: "work"
    };
  },
  head() {
    return {
      title: "Work",
      meta: [
        ...this.meta
        // {
        //   property: "article:published_time",
        //   content: this.article.createdAt
        // },
        // {
        //   property: "article:modified_time",
        //   content: this.article.updatedAt
        // },
        // {
        //   property: "article:tag",
        //   content: this.article.tags ? this.article.tags.toString() : ""
        // },
        // { name: "twitter:label1", content: "Written by" },
        // { name: "twitter:data1", content: "Bob Ross" },
        // { name: "twitter:label2", content: "Filed under" },
        // {
        //   name: "twitter:data2",
        //   content: this.article.tags ? this.article.tags.toString() : ""
        // }
      ]
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: "Work",
        description: "All the projects I've done",
        url: `${this.$store.state.infos.url}/work`
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
