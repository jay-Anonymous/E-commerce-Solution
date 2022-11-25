<template>
  <div
    class="bg-white dark:bg-veryDarkBlue-desaturated shadow-2xl rounded-t-md overflow-y-auto h-64"
  >
    <draggable
      ref="list"
      :list="currentTodos"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      v-if="currentTodos.length"
      class="divide-y divide-veryLightGrayishBlue dark:divide-veryDarkGrayishBlue overflow-x-hidden"
    >
      <template #item="{ element }">
        <todo-item
          :id="element.id"
          :title="element.title"
          :isCompleted="element.isCompleted"
        ></todo-item>
      </template>
    </draggable>
    <base-card v-else class="shadow-none text-center rounded-t-md p-4">
      There's no {{ filter === "all" ? "" : filter }} todo
    </base-card>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useTodoStore } from "../../store/todo";
import TodoItem from "./TodoItem.vue";

import draggable from "vuedraggable";
// import autoAnimate from "@formkit/auto-animate";

export default {
  components: {
    TodoItem,
    draggable,
  },
  data() {
    return {
      drag: false,
      list: this.$refs.list,
    };
  },
  computed: {
    ...mapState(useTodoStore, ["currentTodos", "filter", "numberOfActiveTodo"]),
  },
  mounted() {
    // const disabled = autoAnimate(this.$refs.list.$el);
    // disabled.disable();
  },
};
</script>
