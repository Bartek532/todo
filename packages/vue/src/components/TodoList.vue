<template>
  <div>
    <div class="todo">
      <section v-if="todos.length" class="todo-list">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="$emit('removeTodo', $event)"
        />
      </section>
      <div class="something" v-else>
        There are no tasks,
        <br />everything is done!
      </div>
      <article class="new-todo">
        <button
          :class="[{ active: isNewTodoActive }, 'circle']"
          @click="isNewTodoActive = !isNewTodoActive"
        >
          <span className="sr-only">add todo</span>
          <div class="icon">
            <i class="fas fa-plus"></i>
          </div>
        </button>
      </article>
      <div :class="[{ isActive: isNewTodoActive }, 'new-todo-field']">
        <NewTodoItem @add="$emit('addTodo', $event)" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import NewTodoItem from "./NewTodoItem.vue";
export default {
  components: {
    TodoItem,
    NewTodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isNewTodoActive: false,
    };
  },
};
</script>

<style>
.todo {
  background-color: transparent;
  padding: 0;
  max-width: 335px;
  min-height: 225px;
}

.todo-list {
  background-color: #fff;
  padding: 15px 0;
  overflow-y: scroll;
  max-height: 50vh;
}

.something {
  background: #fff;
  text-align: center;
  padding: 40px 60px;
  font-size: 1.5em;
  font-weight: bold;
  max-width: 335px;
  min-height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.new-todo {
  width: 100%;
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 0 0 10px 10px;
}
.new-todo .circle {
  background-color: #f38181;
  position: absolute;
  top: 20%;
  color: #fff;
  width: 60px;
  padding: 20px;
  font-size: 1.2em;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}

.new-todo .circle .icon {
  transition: 0.4s;
}

.new-todo .circle.active .icon {
  transform-origin: 50% 40%;
  transform: rotate(45deg);
}

.new-todo-field {
  visibility: hidden;
  position: relative;
  z-index: -1;
  transform-origin: 50% 0%;
  transform: translateY(-50px) scale(0);
  transition: 0.3s;
}

.new-todo-field.isActive {
  visibility: visible;
  transform: translateY(0px) scale(1);
  z-index: 1;
  transition: 0.4s;
}
</style>
