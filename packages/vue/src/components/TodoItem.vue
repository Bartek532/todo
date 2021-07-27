<template>
  <label class="todo" data-testid="todo">
    <input
      type="checkbox"
      :checked="todo.isDone"
      class="todo__input"
      @change="
        $emit('changeTodo', {
          value: $event.target.checked,
          todoId: todo.id,
        })
      "
    />
    <div class="checkmark">
      <CheckIcon class="checkmark__icon" />
    </div>
    <span class="todo__description">
      {{ todo.text }}
    </span>
  </label>
</template>

<script>
import CheckIcon from "../assets/icons/done.svg";
export default {
  components: {
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
  grid-template-columns: 1fr 5fr;
  grid-gap: 0;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 20px;
  background: #fff;
  font-size: 1.2em;
  cursor: pointer;

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
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
      display: none;
    }
  }

  &__input:focus ~ .checkmark {
    box-shadow: 1px 2px 14px -7px #000;
  }

  &__input:checked ~ .checkmark .checkmark__icon {
    display: block;
  }

  &__input:checked ~ .todo__description {
    color: #777470;
    &::after {
      transform: scaleX(1);
    }
  }

  &__description {
    position: relative;
    transition: color 0.4s;
    width: max-content;
    max-width: 210px;
    word-break: break-all;

    &::after {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 2px;
      content: "";
      background: #777470;
      transform-origin: 0% 0%;
      transform: scaleX(0);
      transition: transform 0.4s;
    }
  }
}
</style>
