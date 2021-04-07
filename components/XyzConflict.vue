<template>
  <div class="xyz-nested" ref="el">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["endClass"],
  mounted() {
    let el = this.$refs.el;
    el.addEventListener("animationend", () => {
      el.classList.remove("xyz-nested");
      setTimeout(() => {
        el.classList.add(this.$props.endClass);
      }, 0);
    });
  }
};
</script>