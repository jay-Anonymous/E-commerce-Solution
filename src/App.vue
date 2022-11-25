<template>
  <div
    class="bg-image-container bg-mobile-light dark:bg-mobile-dark sm:bg-light sm:dark:bg-dark"
    aria-hidden="true"
  ></div>
  <main-container>
    <todo-input class="mb-4 sm:mb-6 rounded-md"></todo-input>
    <todo-list></todo-list>
  </main-container>
</template>

<script>
import MainContainer from "./components/layouts/MainContainer.vue";
import TodoInput from "./components/todos/TodoInput.vue";
import TodoList from "./components/todos/TodoList.vue";

export default {
  name: "App",
  components: {
    MainContainer,
    TodoInput,
    TodoList,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

#app {
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
 /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  */
  color: #fff;
  overflow-x: hidden;
}
</style>
