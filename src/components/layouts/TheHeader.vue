<template>
  <header class="header">
    <h1
      class="text-white text-2xl sm:text-4xl uppercase font-bold tracking-[0.725rem] sm:tracking-[1rem]"
    >
      Todo
    </h1>
    <button @click="toggleDarkMode">
      <img
        v-if="dark"
        src="../../assets/img/icon-sun.svg"
        alt="Light"
        class="w-5 h-5 sm:w-6 sm:h-6"
      />
      <img
        v-else
        src="../../assets/img/icon-moon.svg"
        alt="Dark"
        class="w-5 h-5 sm:w-6 sm:h-6"
      />
    </button>
  </header>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useStore } from "../../store/index";
export default {
  computed: {
    ...mapState(useStore, ["dark"]),
  },
  mounted() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      this.setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  },
  methods: {
    ...mapActions(useStore, ["setDark"]),

    toggleDarkMode() {
      this.setDark(!this.dark);
      localStorage.theme = this.dark ? "dark" : "light";

      if (this.dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>

<style scoped></style>
