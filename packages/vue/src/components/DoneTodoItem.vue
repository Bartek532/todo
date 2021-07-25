<template>
  <label class="todo">
    <input type="checkbox" class="todo__input" disabled checked />
    <div class="checkmark">
      <CheckIcon class="checkmark__icon" />
    </div>
    <span class="todo__description">
      {{ todo.text }}
    </span>
    <button class="todo__remove" @click="$emit('remove', todo.id)">
      <span class="sr-only">delete todo</span>
      <CloseIcon />
    </button>
  </label>
</template>

<script>
import CheckIcon from "../assets/icons/done.svg";
import CloseIcon from "../assets/icons/close.svg";
export default {
  name: "DoneTodoItem",
  components: {
    CloseIcon,
    CheckIcon,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 4fr 0.5fr;
  grid-gap: 0;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 20px;
  background: #fff;
  font-size: 1.2em;

  &__input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: relative;
    width: 27px;
    height: 27px;
    border: 3px solid #d9d6d0;
    border-radius: 10px;

    &__icon {
      position: absolute;
      top: -5.5px;
      left: -2px;
    }
  }

  &__description {
    position: relative;
    transition: color 0.4s;
    width: max-content;
    max-width: 200px;
    word-break: break-all;
    color: #777470;

    &::after {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 2px;
      content: "";
      background: #777470;
      transform-origin: 0% 0%;
      transition: transform 0.4s;
    }
  }

  &__remove {
    border: 0 none;
    cursor: pointer;
    background-color: transparent;
  }
}
</style>
