<template>
  <article class="single-todo">
    <button>
      <span className="sr-only">checked checkbox</span>
      <div class="icon">
        <i class="fas fa-check"></i>
      </div>
    </button>
    <div class="text">{{ doneTodo.text }}</div>
    <button @click="$emit('remove', doneTodo.id)" class="close">
      <span className="sr-only">remove todo</span>
      <div class="icon">
        <i class="fas fa-times"></i>
      </div>
    </button>
  </article>
</template>

<script>
export default {
  props: {
    doneTodo: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.single-todo {
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 4fr 0.5fr;
  grid-gap: 0px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0px;
  background: #fff;
  font-size: 1.2em;
}

.text {
  max-width: 200px;
  word-break: break-all;
}

button {
  border: 3px solid #d9d6d0;
  background: transparent;
  width: 27px;
  height: 27px;
  font-size: 1em;
  border-radius: 10px;
  color: #9e73c8;
}

.close {
  background: transparent;
  border: 0 none;
  margin: 0 10px;
  cursor: pointer;
}
</style>
