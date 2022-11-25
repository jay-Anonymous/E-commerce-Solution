import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoList", {
  state: () => ({
    /** todo => {id, title, isCompleted (true or false)} */
    todos: [],
    nextId: 0,
    /** filter => all | active | completed */
    filter: "all",
  }),
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => todo.isCompleted);
    },
    activeTodos(state) {
      return state.todos.filter((todo) => !todo.isCompleted);
    },
    currentTodos(state) {
      if (state.filter === "active") {
        return this.activeTodos;
      } else if (state.filter === "completed") {
        return this.completedTodos;
      }
      return state.todos;
    },
    numberOfActiveTodo(getters) {
      return getters.activeTodos.length;
    },
  },
  actions: {
    addTodo(title) {
      this.todos.unshift({
        id: this.nextId++,
        title,
        isCompleted: false,
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    deleteCompletedTodo() {
      if (this.completedTodos) {
        this.todos = this.todos.filter((todo) => !todo.isCompleted);
      }
    },
    completeTodo(id) {
      const toComplete = this.todos.find((todo) => todo.id === id);
      toComplete.isCompleted = !toComplete.isCompleted;
    },
    setFilter(filter) {
      this.filter = filter;
    },
  },
});
