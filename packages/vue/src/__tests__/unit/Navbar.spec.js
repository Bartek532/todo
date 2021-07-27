import { render, screen, fireEvent } from "@testing-library/vue";
import VueRouter from "vue-router";
import Todos from "@/views/Todos.vue";
import DoneTodos from "@/views/DoneTodos.vue";
import App from "@/App.vue";
import { store } from "@/store";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Todos },
    { path: "/done", component: DoneTodos },
  ],
});

test("full app rendering/navigating", async () => {
  console.log(store);
  render(App, { routes: router, store });

  expect(screen.getByText(/check in to flight/i)).toBeInTheDocument();

  await fireEvent.click(screen.getByRole("link", { name: /done todos/i }));

  expect(
    screen.getByText(/you don't have any tasks done/i)
  ).toBeInTheDocument();
});
