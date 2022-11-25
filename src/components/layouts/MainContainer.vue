<template>
  <div class="max-w-xs sm:max-w-[545px] mx-auto -mt-40 sm:-mt-56">
    <the-header></the-header>
    <main class="max-w-3xl">
      <slot></slot>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
