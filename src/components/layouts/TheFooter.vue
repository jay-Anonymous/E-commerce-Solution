<template>
  <footer>
    <base-card
      class="rounded-b-md border-t border-veryLightGrayishBlue dark:border-veryDarkGrayishBlue relative"
    >
      <div class="controls flex justify-between text-sm p-2">
        <span class="text-darkGrayishBlueDark">
          {{ numberOfActiveTodo }} item{{
            numberOfActiveTodo <= 1 ? "" : "s"
          }}
          left</span
        >
        <div
          class="controls-button-list btn-group flex w-full absolute top-20 left-0 right-0 sm:w-40 sm:static sm:top-0"
        >
          <base-button
            @click="setFilter('all')"
            :mode="[filter === 'all' ? 'active' : '']"
            >All</base-button
          >
          <base-button
            @click="setFilter('active')"
            :mode="[filter === 'active' ? 'active' : '']"
            >Active</base-button
          >
          <base-button
            @click="setFilter('completed')"
            :mode="[filter === 'completed' ? 'active' : '']"
            >Completed</base-button
          >
        </div>
        <button
          @click="deleteCompletedTodo"
          class="text-darkGrayishBlue hover:text-veryDarkGrayishBlue dark:text-veryDarkGrayishBlue dark:hover:text-lightGrayishBlue-hover transition-all"
        >
          Clear Completed
        </button>
      </div>
    </base-card>

    <div
      class="text-sm sm:text-base text-center text-darkGrayishBlue dark:text-veryDarkGrayishBlue mt-32 sm:mt-12"
    >
      <strong>Drag and drop to reorder list</strong>
    </div>
    <div
      class="text-center text-sm text-darkGrayishBlue dark:text-lightGrayishBlue mt-8"
    >
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-brightBlue"
        >Frontend Mentor</a
      >. Coded by
      <a
        href="https://www.frontendmentor.io/profile/dinadess"
        class="text-brightBlue"
        >Oshyeld</a
      >.
    </div>
  </footer>
</template>

<script>
import { useTodoStore } from "../../store/todo";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useTodoStore, ["filter", "numberOfActiveTodo"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["deleteCompletedTodo", "setFilter"]),
  },
};
</script>
