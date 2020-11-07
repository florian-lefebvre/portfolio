<template>
  <div>
    <div class="container px-5 pt-24 mx-auto">
      <nuxt-link
        to="/work"
        type="button"
        class="mb-10 inline-flex items-center leading-5 font-medium text-gray-700 hover:text-teal-500 focus:outline-none transition duration-100 ease-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 h-4 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to projects list
      </nuxt-link>
      <h1 class="text-4xl font-semibold mb-4 leading-tight">
        {{ project.title }}
      </h1>
      <div class="flex justify-between flex-col sm:flex-row mb-10">
        <h3 class="mt-1 space-x-1">
          <span
            class="rounded-full uppercase px-2 py-1 font-semibold shadow"
            :class="project.variant"
            >{{ project.status }}</span
          >
          <nuxt-link
            v-for="(tag, index) in project.tags"
            :key="index"
            :to="`/work/tags/${tag}`"
            class="text-teal-600 font-semibold hover:underline"
            >#{{ tag }}
          </nuxt-link>
        </h3>
        <h3 class="mt-1">
          Last updated on {{ updatedAt }} • {{ readingTime }}
        </h3>
      </div>
      <light-box
        class="mb-10"
        :gallery="[
          {
            src: `/img/work/${project.img}`,
            alt: project.alt
          }
        ]"
      ></light-box>
      <p class="mb-4">{{ project.desc }}</p>
      <nav>
        <ul class="list-disc ml-4">
          <li
            v-for="link of project.toc"
            :key="link.id"
            :class="{
              'py-2': link.depth === 2,
              'ml-4 pb-2': link.depth === 3
            }"
          >
            <nuxt-link
              :to="`#${link.id}`"
              class="text-teal-600 font-semibold hover:underline"
              >{{ link.text }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <nuxt-content :document="project" />
    </div>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("work", params.slug).fetch();

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

    project.variant = colorVariants(project.variant);

    return { project, prev, next };
  },
  computed: {
    updatedAt() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.project.updatedAt).toLocaleDateString("en", options);
    },
    readingTime() {
      var milli = this.project.readingTime,
        sec = milli / 1000,
        min = sec / 60,
        final = Number(min.toFixed(0)),
        output = "";

      if (milli <= 30000) {
        output = "1 min read";
      } else {
        output = final + " min read";
      }

      return output;
    }
  }
};
</script>

<style lang="scss">
.nuxt-content {
  @apply text-gray-900;

  h2,
  h3 {
    @apply relative table my-8;

    &::after {
      content: "";
      @apply w-4/5 block mt-2 mb-1 rounded border-2;
    }

    .icon-link {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14' /%3E%3C/svg%3E");
      background-size: 1.5rem 1.5rem;
      @apply w-6 h-6 mb-2 hidden;
    }

    a {
      @apply mt-2 absolute top-0 left-0 -ml-6;
    }

    &:hover a .icon-link {
      @apply inline-block;
    }
  }

  h2 {
    @apply text-2xl;

    &::after {
      @apply border-teal-600 bg-teal-600;
    }
  }

  h3 {
    @apply text-xl;

    &::after {
      @apply border-gray-600 bg-gray-600;
    }
  }

  p {
    @apply text-justify leading-7 pb-1 mb-2 font-medium;
  }

  a {
    @apply text-teal-700;
    &:hover {
      @apply underline;
    }
  }

  .nuxt-content-highlight {
    @apply relative;

    .filename {
      @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
    }
  }
}
</style>
