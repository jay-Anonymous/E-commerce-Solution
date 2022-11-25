import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/css/style.css";

// Components
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const pinia = createPinia();

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.use(pinia);

if (localStorage.getItem("todoStore")) {
  pinia.state.value.todoList = JSON.parse(localStorage.getItem("todoStore"));
}

watch(
  () => pinia.state.value.todoList,
  (state) => {
    localStorage.setItem("todoStore", JSON.stringify(state));
  },
  { deep: true }
);

app.mount("#app");
