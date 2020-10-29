<template>
  <div>
    <div>Tag: {{ this.$route.params.tag }}</div>
    <div v-if="articles.length == 0">
      <p>No articles with this tag</p>
    </div>
    <ul v-else>
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink :to="article.path">
          <img :src="article.img" :alt="article.alt" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <p>{{ formatDate(article.updatedAt) }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .where({
        'tags': { $contains: params.tag }
      })
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>

<style></style>
