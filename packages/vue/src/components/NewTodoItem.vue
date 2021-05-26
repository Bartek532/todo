<template>
  <div class="add-todo">
    <div class="btn">
      <button class="circle" @click="isOpen = !isOpen">
        <span class="sr-only">plus</span>
        <PlusIcon :class="['icon', { active: isOpen }]" />
      </button>
    </div>
    <form :class="['form', { active: isOpen }]" @submit.prevent="handleAddTodo">
      <input
        type="text"
        placeholder="Add a task"
        v-model="text"
        class="form__input"
      />
      <button class="form__btn">Add</button>
    </form>
  </div>
</template>

<script>
import PlusIcon from "../assets/icons/plus.svg";
export default {
  components: {
    PlusIcon,
  },
  data() {
    return {
      text: "",
      isOpen: false,
    };
  },
  methods: {
    handleAddTodo: function (e) {
      if (this.text.trim()) {
        this.$store.dispatch("addTodo", this.text);
        e.target.reset();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 0 0 10px 10px;
  .circle {
    background-color: #f38181;
    border: 0 none;
    position: absolute;
    top: 20%;
    color: #fff;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    outline: 0 none;

    &:focus {
      box-shadow: 1px 2px 18px -2px #f38181;
    }

    .icon {
      transition: transform 0.4s;
    }

    .active {
      transform-origin: 50% 50%;
      transform: rotate(45deg);
    }
  }
}

.form {
  position: relative;
  background: #fff;
  border-radius: 0.4em;
  margin-top: 70px;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  visibility: hidden;
  position: relative;
  z-index: -1;
  transform-origin: 50% 0%;
  transform: translateY(-50px) scale(0);
  transition: transform 0.3s, visibility 0.3s;

  &.active {
    visibility: visible;
    transform: translateY(0px) scale(1);
    z-index: 1;
  }

  &__input {
    width: 200px;
    padding: 7px;
    font-size: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 25px solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    margin-left: -25px;
    margin-top: -25px;
  }

  &__btn {
    font-size: 1rem;
    padding: 7px 20px;
    background: #f38181;
    border: 1.5px solid #f38181;
    border-radius: 1px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #fff;
      color: #f38181;
      transition: all 0.3s;
    }
  }
}
</style>
