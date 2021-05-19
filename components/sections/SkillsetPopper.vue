<template>
  <popper
    :options="{
      placement: 'top',
      modifiers: { offset: { offset: '0,10px' } }
    }"
    transition='fade'
    enter-active-class='fade-enter-active'
    leave-active-class='fade-leave-active'
  >
    <div class="popper">
      {{ popperContent }}
    </div>

    <div slot="reference">
      <slot />
    </div>
  </popper>
</template>

<script>
import Popper from "vue-popperjs";

export default {
  components: {
    popper: Popper
  },
  props: ["popperContent"]
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.popper {
  @apply w-auto max-w-sm md:max-w-lg text-gray-800 bg-gray-300 dark:bg-gray-900 dark:text-gray-200 text-justify p-4 inline-block rounded-2xl absolute text-base font-normal z-40 border-gray-200 dark:border-gray-800 border-4;
}
.popper .popper__arrow {
  @apply w-0 h-0 border-solid absolute m-2;
}
.popper[x-placement^="top"] {
  @apply mb-2;
}
.popper[x-placement] .popper__arrow {
  border-color: theme("colors.gray.300") transparent transparent transparent;
  @apply border-8 border-b-0;
}

.dark .popper[x-placement] .popper__arrow {
  border-color: theme("colors.gray.900") transparent transparent transparent;
}

.popper[x-placement^="top"] .popper__arrow {
  bottom: -8px;
  left: calc(50% - 8px);
  margin-top: 0;
  margin-bottom: 0;
}
.popper[x-placement^="bottom"] {
  margin-top: 8px;
}
.popper[x-placement^="bottom"] .popper__arrow {
  @apply transform rotate-180;
  top: -8px;
  left: calc(50% - 8px);
  margin-top: 0;
  margin-bottom: 0;
}
.popper[x-placement^="right"] {
  margin-left: 8px;
}
.popper[x-placement^="right"] .popper__arrow {
  @apply transform rotate-90;
  left: -12px;
  top: calc(50% - 8px);
  margin-left: 0;
  margin-right: 0;
}
.popper[x-placement^="left"] {
  margin-right: 8px;
}
.popper[x-placement^="left"] .popper__arrow {
  @apply transform -rotate-90;
  right: -12px;
  top: calc(50% - 8px);
  margin-left: 0;
  margin-right: 0;
}
</style>
