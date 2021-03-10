<template>
  <main>
    <nav class="top-icons">
      <div
        :class="[{ active: isFirstActive }, 'first']"
        @click="changeActiveField('first')"
      >
        <span className="sr-only">active todos</span>
        <i class="far fa-list-alt"></i>
      </div>
      <div
        :class="[{ active: isSecondActive }, 'second']"
        @click="changeActiveField('second')"
      >
        <span className="sr-only">done todos</span>
        <i class="far fa-calendar-check"></i>
      </div>
    </nav>
    <TodoList
      v-if="isFirstActive"
      :todos="todos"
      @removeTodo="removeTodo"
      @addTodo="addTodo"
    />
    <DoneTodosList
      v-else
      :doneTodos="doneTodos"
      @closeTodo="closeTodo"
      @clearAll="clearAll"
    />
  </main>
</template>

<script>
let TodoId = 0;
import TodoList from "./components/TodoList.vue";
import DoneTodosList from "./components/DoneTodosList.vue";
export default {
  components: {
    TodoList,
    DoneTodosList,
  },
  data() {
    return {
      todos: [
        {
          id: TodoId++,
          text: "Call the dentist",
          isTodoChecked: false,
        },
        {
          id: TodoId++,
          text: "Read an article",
          isTodoChecked: false,
        },
        {
          id: TodoId++,
          text: "Check in to flight",
          isTodoChecked: false,
        },
        {
          id: TodoId++,
          text: "Go for a walk",
          isTodoChecked: false,
        },
        {
          id: TodoId++,
          text: "Create new project",
          isTodoChecked: false,
        },
      ],
      doneTodos: [],
      isFirstActive: true,
      isSecondActive: false,
    };
  },
  methods: {
    changeActiveField(field) {
      if (field == "first") {
        this.isFirstActive = true;
        this.isSecondActive = false;
      } else {
        this.isFirstActive = false;
        this.isSecondActive = true;
      }
    },
    removeTodo(removeid) {
      this.todos.find(
        item => item.id == removeid
      ).isTodoChecked = !this.todos.find(item => item.id == removeid)
        .isTodoChecked;

      this.doneTodos = this.todos.filter(item => item.isTodoChecked);
    },
    addTodo(text) {
      if (text.trim() !== "") {
        this.todos.push({
          id: TodoId++,
          text: text.trim(),
          isTodoChecked: false,
        });
      }
    },
    closeTodo(removeid) {
      this.todos = this.todos.filter(item => item.id != removeid);
      this.doneTodos = this.todos.filter(item => item.isTodoChecked);
    },
    clearAll() {
      this.doneTodos = [];
      this.todos = this.todos.filter(item => !item.isTodoChecked);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400&display=swap");
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: linear-gradient(to right bottom, #fce38a, #f38181);
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
  font-family: "Alegreya Sans", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*:focus {
  outline: 0 none;
}

.top-icons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-icons .first,
.top-icons .second {
  width: 50%;
  text-align: center;
  background: #f0eee9;
  color: gray;
  padding: 20px 70px;
  font-size: 1.6em;
  cursor: pointer;
  border-radius: 20px 20px 0 0;
}

.top-icons .active {
  color: #9e73c8;
  background: #fff;
  cursor: default;
}
</style>
