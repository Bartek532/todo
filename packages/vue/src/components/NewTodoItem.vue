<template>
  <div class="speech-bubble">
    <input
      type="text"
      placeholder="Add a task"
      v-model="text"
      @keydown.enter="$emit('add', text); text=''"
    />
    <button @click="$emit('add', text); text=''">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style scoped>
.speech-bubble {
  position: relative;
  background: #fff;
  border-radius: 0.4em;
  margin-top: 70px;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.speech-bubble:after {
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

input {
  width: 200px;
  padding: 7px;
  font-size: 1rem;
}

button {
  font-size: 1rem;
  padding: 7px 20px;
  background: #f38181;
  border: 0 none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
</style>
