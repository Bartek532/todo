<template>
  <main class="wrapper">
    <section v-if="$store.state.todos.length" class="todos">
      <TodoItem
        v-for="todo in $store.state.todos"
        :key="todo.id"
        :todo="todo"
        @changeTodo="
          $store.dispatch('manageTodo', {
            value: $event.value,
            todoId: $event.todoId,
          })
        "
      />
    </section>
    <p class="empty" v-else>There are no tasks, everything is done!</p>
    <NewTodoItem />
  </main>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
import NewTodoItem from "../components/NewTodoItem.vue";
export default {
  components: {
    TodoItem,
    NewTodoItem,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: transparent;
  padding: 0;
  max-width: 335px;

  .todos {
    background-color: #fff;
    padding: 15px 0;
    overflow-y: scroll;
    max-height: 50vh;
    min-height: 225px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .empty {
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
    margin: 0;
  }
}
</style>
