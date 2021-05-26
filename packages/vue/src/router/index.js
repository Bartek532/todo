import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todos",
    component: () =>
      import(/* webpackChunkName: "Todos" */ "../views/Todos.vue"),
  },
  {
    path: "/done",
    name: "DoneTodos",
    component: () =>
      import(/* webpackChunkName: "DoneTodos" */ "../views/DoneTodos.vue"),
  },
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
