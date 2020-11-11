<template>
  <div class="flex flex-col">
    <div class="bg-teal-100">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 -mt-32 relative justify-center">
          <Tag
            v-for="(tag, index) in tags"
            :key="index"
            :tag="tag"
            :folder="folder"
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
      tags: null
    };
  },
  methods: {
    async getTags() {
      const elements = await this.$content(this.folder)
        .only(["tags"])
        .fetch();

      var tags = [],
        count = [];

      elements.forEach(function(e) {
        e.tags.forEach(function(t) {
          if (!tags.includes(t)) {
            tags.push(t);
            count.push(0);
          }
          count[tags.indexOf(t)]++;
        });
      });

      tags.forEach(function(t, i) {
        tags[i] = [t, count[i]];
      });

      tags.sort();
      this.tags = tags;
    }
  },
  mounted() {
    this.getTags();
  }
};
</script>

<style></style>
