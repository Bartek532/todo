import Vuex from "vuex";
import Vue from "vue";
import { types } from "./mutation-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: "Call the dentist",
        isDone: false,
      },
      {
        id: 2,
        text: "Read an article",
        isDone: false,
      },
      {
        id: 3,
        text: "Check in to flight",
        isDone: false,
      },
      {
        id: 4,
        text: "Go for a walk",
        isDone: true,
      },
      {
        id: 5,
        text: "Create new project",
        isDone: false,
      },
    ],
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.isDone);
    },
  },
  mutations: {
    [types.ADD_TODO](state, payload) {
      state.todos = [...state.todos, payload];
    },
    [types.REMOVE_TODO](state, todoId) {
      state.todos = state.todos.filter(({ id }) => id !== todoId);
    },
    [types.SET_TODOS](state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    addTodo: ({ commit, state }, text) => {
      commit(types.ADD_TODO, {
        id: (state.todos[state.todos.length - 1]?.id || 0) + 1,
        text,
        isDone: false,
      });
    },
    markTodoAsDone: ({ commit, state }, todoId) => {
      const todos = state.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, isDone: true };
        }

        return todo;
      });
      commit(types.SET_TODOS, todos);
    },
    markTodoAsNotDone: ({ commit, state }, todoId) => {
      const todos = state.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, isDone: false };
        }

        return todo;
      });
      commit(types.SET_TODOS, todos);
    },
    removeDoneTodo: ({ commit }, todoId) => {
      commit(types.REMOVE_TODO, todoId);
    },
    removeAllDoneTodos: ({ commit, state }) => {
      const leftTodos = state.todos.filter(todo => !todo.isDone);
      commit(types.SET_TODOS, leftTodos);
    },
    manageTodo: ({ dispatch }, { value, todoId }) => {
      if (value) {
        return dispatch("markTodoAsDone", todoId);
      }

      return dispatch("markTodoAsNotDone", todoId);
    },
  },
});
