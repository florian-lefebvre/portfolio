---
title: Lorem ispum
desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt.
img: test.jpg
alt: A super cool image
status: Finished
variant: success
link: https://www.ohf31.fr
tags:
  - css3
  - tailwindcss
  - nuxtjs
  - docker
  - jekyll
---

## V1

### lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.

## V2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id congue enim. Donec aliquam arcu ac magna pellentesque, et ultrices risus tincidunt. Sed et tincidunt augue. Vivamus sit amet accumsan quam. Ut at nisi vestibulum, tincidunt massa eget, laoreet ex. Donec risus sem, sodales in auctor a, aliquam sed dolor. Donec mi nunc, auctor pharetra volutpat quis, tristique nec augue. In hac habitasse platea dictumst. Proin vehicula viverra erat eget vestibulum. Curabitur vitae posuere risus. Etiam consequat magna malesuada arcu condimentum dictum.

```vue[file.vue]
<template>
  <div>
    <ArticleHeader
      type="Project"
      :folder="folder"
      :buttons="buttons"
      :article="project"
    />
    <ArticleContent :article="project" />
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          text: "Back to projects list"
        }
      ]
    };
  }
};
</script>

<style></style>


```
