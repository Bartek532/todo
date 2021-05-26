<template>
  <main class="wrapper">
    <div v-if="$store.getters.doneTodos.length">
      <section class="todos">
        <DoneTodoItem
          v-for="todo in $store.getters.doneTodos"
          :key="todo.id"
          :todo="todo"
          @remove="$store.dispatch('removeDoneTodo', $event)"
        />
      </section>
      <div class="clear-all">
        <button
          @click="$store.dispatch('removeAllDoneTodos')"
          class="clear-all__btn"
        >
          Clear all
        </button>
      </div>
    </div>
    <p class="empty" v-else>You don't have any tasks done, do something!</p>
  </main>
</template>

<script>
import DoneTodoItem from "../components/DoneTodoItem";
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

.clear-all {
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
  position: relative;
  background: #fff;
  border-radius: 0 0 10px 10px;

  &__btn {
    border: 0 none;
    color: #fff;
    background: #f38181;
    padding: 8px 28px;
    border: 2px solid #f38181;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #f38181;
      background: #fff;
      transition: 0.3s;
    }
  }
}
</style>
