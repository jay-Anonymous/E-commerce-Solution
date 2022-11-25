import { defineStore } from "pinia";

export const useStore = defineStore("theme", {
  state: () => {
    return {
      dark: false,
    };
  },
  actions: {
    setDark(payload) {
      this.dark = payload;
    },
  },
});
