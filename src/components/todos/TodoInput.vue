<template>
  <base-card>
    <span
      v-if="errorMsg"
      class="text-sm sm:text-base text-red-500 pb-2 transition-all flex"
    >
      <ShieldExclamationIcon class="h-4 w-4 sm:h-6 sm:w-6 inline-block mr-2" />
      {{ errorMsg }}
    </span>
    <form @submit.prevent="addNewTodo" class="flex items-center">
      <div
        class="inline-block w-4 h-4 sm:w-7 sm:h-7 mr-5 rounded-full bg-transparent border border-veryLightGrayishBlue dark:border-darkGrayishBlueDark shrink-0"
      ></div>
      <input
        v-model.trim="enteredTodo"
        ref="input"
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="Create a new todo..."
        class="w-full text-sm sm:text-lg bg-transparent focus-visible:outline-none text-veryDarkGrayishBlue dark:text-lightGrayishBlue"
      />

      <button type="submit" aria-label="Add Todo">
        <PaperAirplaneIcon class="h-6 w-6 text-brightBlue" />
      </button>
    </form>
  </base-card>
</template>

<script>
import { useTodoStore } from "../../store/todo";
import { mapActions, mapState } from "pinia";

import { PaperAirplaneIcon } from "@heroicons/vue/24/outline";
import { ShieldExclamationIcon } from "@heroicons/vue/24/outline";

export default {
  components: { PaperAirplaneIcon, ShieldExclamationIcon },
  data() {
    return {
      enteredTodo: "",
      errorMsg: "",
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    ...mapActions(useTodoStore, ["addTodo", "deleteTodo"]),

    ...mapState(useTodoStore, ["todos"]),

    addNewTodo() {
      if (!this.enteredTodo) {
        this.errorMsg = "Input should not be empty !";
      } else if (this.enteredTodo.length < 3) {
        this.errorMsg = "Please input more than 3 characters !";
      } else {
        this.addTodo(this.enteredTodo);
        this.enteredTodo = "";
        this.errorMsg = "";
        this.$refs.input.focus();
      }
    },
  },
};
</script>
