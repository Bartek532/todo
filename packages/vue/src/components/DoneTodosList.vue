<template>
  <div>
    <div class="todo" v-if="doneTodos.length">
      <section class="todo-list">
        <DoneTodoItem
          v-for="doneTodo in doneTodos"
          :key="doneTodo.id"
          :doneTodo="doneTodo"
          @remove="$emit('closeTodo', $event)"
        />
      </section>
      <div class="clear-all">
        <button @click="$emit('clearAll')">Clear all</button>
      </div>
    </div>
    <div class="something" v-else>
      You don't have any tasks done,
      <br />do something!
    </div>
  </div>
</template>

<script>
import DoneTodoItem from "./DoneTodoItem.vue";
export default {
  components: {
    DoneTodoItem,
  },
  props: {
    doneTodos: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.todo-list {
  max-width: 335px;
  min-height: 225px;
}
.something {
  background: #fff;
  text-align: center;
  max-width: 335px;
  min-height: 300px;
  padding: 40px 60px;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clear-all {
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
  position: relative;
  background: #fff;
  border-radius: 0 0 10px 10px;
}

.clear-all button {
  border: 0 none;
  color: #fff;
  background: #f38181;
  padding: 10px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  cursor: pointer;
}
</style>
