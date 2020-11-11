<template>
  <div>
    <ArticleHeader type="Article" :buttons="buttons" :article="el" />
    <ArticleContent :article="el" />
    <PrevNext :prev="prev" :next="next" v-if="prev || next" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          text: "Back to articles list"
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const el = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
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
  }
};
</script>

<style></style>
