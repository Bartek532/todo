<template>
  <div>
    <div class="single-todo">
      <button @click="$emit('remove', todo.id)">
        <div :class="[{ checked: todo.isTodoChecked }, 'icon']">
          <i class="fas fa-check"></i>
        </div>
      </button>
      <div class="text-grid">
        <div :class="[{ checked: todo.isTodoChecked }, 'text']">
          {{ todo.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.single-todo {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 0px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0px;
  background: #fff;
  font-size: 1.2em;
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

button .icon {
  display: none;
}
button .checked {
  display: block;
}

.text {
  position: relative;
  transition: 0.4s;
  width: max-content;
  max-width: 210px;
  word-break: break-all;
}

div .text::after {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  content: "";
  background: #ccc9c2;
  transform-origin: 0% 0%;
  transform: scaleX(0);
  transition: 0.4s;
}

.checked.text::after {
  transform: scaleX(1);
  transition: 0.4s;
}
.checked.text {
  color: #ccc9c2;
  transition: 0.4s;
}
</style>
