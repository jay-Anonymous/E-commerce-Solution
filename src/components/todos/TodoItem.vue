<template>
  <base-card>
    <div class="flex items-center group">
      <input
        @click="completeATodo"
        type="checkbox"
        :id="id"
        class="w-5 h-5 sm:w-7 sm:h-7 mr-5 flex-shrink-0 appearance-none border border-veryLightGrayishBlue dark:border-darkGrayishBlueDark rounded-full cursor-pointer relative ease-in-out duration-300 checked:border-none"
        :checked="isCompleted"
      />
      <label
        :for="id"
        class="cursor-pointer text-veryDarkGrayishBlue dark:text-lightGrayishBlue text-sm sm:text-lg"
        :class="{ isCompleted: isCompleted }"
      >
        {{ title }}</label
      >
      <button
        aria-label="Delete Todo"
        class="ml-auto p-2 flex-shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100 transition-all"
        @click="deleteATodo()"
      >
        <img
          src="../../assets/img/icon-cross.svg"
          alt="Delete Todo Icon"
          aria-hidden="true"
        />
      </button>
    </div>
  </base-card>
</template>

<script>
import { useTodoStore } from "../../store/todo";
import { mapActions } from "pinia";

export default {
  props: ["id", "title", "isCompleted"],
  methods: {
    ...mapActions(useTodoStore, ["deleteTodo", "completeTodo"]),
    deleteATodo() {
      this.deleteTodo(this.id);
    },
    completeATodo() {
      this.completeTodo(this.id);
    },
  },
};
</script>

<style scoped>
input[type="checkbox"]:checked {
  background: linear-gradient(
    to right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
}

.isCompleted,
input[type="checkbox"]:checked + label {
  text-decoration: line-through;
  color: hsl(233, 11%, 84%);
}
</style>
