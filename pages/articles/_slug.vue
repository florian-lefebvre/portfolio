<template>
  <article>
    <!-- {{ article }} -->
    <!-- <hr /> -->
    <img v-if="article.img"
      class="lg:h-48 md:h-36 w-full object-cover object-center"
      :src="`/img/articles/${article.img}`"
      :alt="article.alt"
    />
    <h1>{{ article.title }}</h1>
    <h2>{{ article.desc }}</h2>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <nuxt-link
            :to="`#${link.id}`"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
            >{{ link.text }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
    <p>Post last updated: {{ updatedAt }}</p>
    <nuxt-content :document="article" />
    <hr />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { article, prev, next };
  },
  computed: {
    updatedAt() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.article.updatedAt).toLocaleDateString("en", options);
    }
  }
};
</script>

<style lang="scss">
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content-highlight {
  @apply relative;
}
.nuxt-content-highlight .filename {
  @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
}

.icon.icon-link {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14' /%3E%3C/svg%3E");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
