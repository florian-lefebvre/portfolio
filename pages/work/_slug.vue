<template>
  <div>
    <ArticleHeader type="Project" :buttons="buttons" :article="el" />
    <ArticleContent :article="el" />
    <PrevNext :prev="prev" :next="next" v-if="prev || next" />
  </div>
</template>

<script>
import getSiteMeta from "@/utils/getSiteMeta";

export default {
  head() {
    return {
      title: this.el.title,
      meta: [...this.meta]
    };
  },
  data() {
    return {
      buttons: [
        {
          text: "Back to projects list"
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const el = await $content("work", params.slug).fetch();

    const [prev, next] = await $content("work")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    function colorVariants(value) {
      return {
        success: "bg-green-300 text-green-800 border-green-800",
        warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
        danger: "bg-red-300 text-red-800 border-red-800",
        info: "bg-blue-300 text-blue-800 border-blue-800"
      }[value];
    }

    el.variant = colorVariants(el.variant);

    return { el, prev, next };
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.el.title,
        description: this.el.desc,
        url: `${this.$store.state.infos.siteUrl}${this.el.dir}/${this.$route.params.slug}`,
        mainImage: `${this.$store.state.infos.siteUrl}/img${this.el.dir}/${this.el.img}`
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>

<style></style>
