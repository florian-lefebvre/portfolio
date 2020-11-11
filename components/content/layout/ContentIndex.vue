<template>
  <div>
    <div class="bg-teal-100">
      <div class="container px-5 py-24 mx-auto">
        <div
          v-if="featured"
          class="bg-white rounded-xl -mt-48 shadow-xl -mb-40 relative hover:scale-95 transform transition duration-150 ease-out"
        >
          <ContentFeatured :featured="featured" />
        </div>
      </div>
    </div>
    <div class="bg-teal-100 pt-10">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <ContentCard
            v-for="element of elements"
            :key="element.slug"
            :el="element"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["folder"],
  data() {
    return {
      elements: null,
      featured: null
    };
  },
  methods: {
    colorVariants(value) {
      return {
        success: "bg-green-300 text-green-800 border-green-800",
        warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
        danger: "bg-red-300 text-red-800 border-red-800",
        info: "bg-blue-300 text-blue-800 border-blue-800"
      }[value];
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    readingTime(time) {
      var milli = time,
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
    },
    async getElements() {
      const elements = await this.$content(this.folder)
        .without(["body"])
        .sortBy("createdAt", "desc")
        .fetch();

      elements.forEach(function(e) {
        e.createdAt = this.formatDate(e.createdAt);
        e.readingTime = this.readingTime(e.readingTime);
        if (this.folder == "work") {
          e.variant = this.colorVariants(e.variant);
        }
      }, this);

      this.featured = elements[0];
      elements.splice(0, 1);
      this.elements = elements;
    }
  },
  mounted() {
    this.getElements();
  }
};
</script>

<style></style>
