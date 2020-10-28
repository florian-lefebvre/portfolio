<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    />
    <ul v-if="articles.length" class="absolute bg-red-100">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.path">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: []
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>

<style></style>
