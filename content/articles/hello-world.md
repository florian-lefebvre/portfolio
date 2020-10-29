---
title: Hello World
desc: My first article
img: test.jpg
alt: alt
tags:
  - html5
  - css3
  - md
---

## Chapter 1

### Sub chapter A

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>

### Sub chapter B

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.

```js[nuxt.config.js]
export default {
  nuxt: "is the best"
};
```

### Sub chapter C

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.

## Chapter 2

### Sub chapter A

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.

<div class="bg-blue-500 text-white p-4 mb-4">
  This is HTML inside markdown that has a class of note
</div>

### Sub chapter B

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.

### Sub chapter C

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.


```vue[_tag.vue]
<template>
  <article>
    <!-- {{ article }} -->
    <!-- <hr /> -->
    <img
      v-if="article.img"
      class="lg:h-48 md:h-36 w-full object-cover object-center"
      :src="`/img/articles/${article.img}`"
      :alt="article.alt"
    />
    <h1>{{ article.title }}</h1>
    <h2>{{ article.desc }}</h2>
  </article>
</template>

<script>
export default {
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
</style>
```
