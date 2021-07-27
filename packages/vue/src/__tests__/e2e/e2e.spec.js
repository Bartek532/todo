import { screen, render, fireEvent } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import App from "@/App.vue";
import { store } from "@/store";
import VueRouter from "vue-router";
import Todos from "@/views/Todos.vue";
import DoneTodos from "@/views/DoneTodos.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Todos },
    { path: "/done", component: DoneTodos },
  ],
});

test("full app working", async () => {
  render(App, { routes: router, store });

  const homeLink = screen.getByRole("link", { name: /active todos/i });
  const doneTodosLink = screen.getByRole("link", { name: /done todos/i });

  //render all todos
  expect(screen.getAllByTestId("todo")).toHaveLength(5);

  //one is checked
  expect(screen.getByLabelText(/go for a walk/i)).toBeChecked();

  //check other todo
  const todoToCheck = screen.getByLabelText(/call the dentist/i);
  userEvent.click(todoToCheck);
  expect(todoToCheck).toBeChecked();

  //checked todos are presented in done todos section
  await fireEvent.click(doneTodosLink);
  expect(screen.getAllByTestId("done-todo")).toHaveLength(2);

  //on delete button press todo is deleted
  const deleteButton = screen.getAllByRole("button", {
    name: /delete todo/i,
  })[0];
  await fireEvent.click(deleteButton);
  expect(screen.getAllByTestId("done-todo")).toHaveLength(1);
  await fireEvent.click(homeLink);
  expect(screen.getAllByTestId("todo")).toHaveLength(4);

  //clear all button cleared all todos which are done
  //but first check all todos ;)
  await fireEvent.click(screen.getByLabelText(/read an article/i));
  await fireEvent.click(screen.getByLabelText(/check in to flight/i));
  await fireEvent.click(screen.getByLabelText(/create new project/i));
  await fireEvent.click(doneTodosLink);
  await fireEvent.click(screen.getByRole("button", { name: /clear all/i }));
  expect(screen.queryAllByTestId("done-todo")).toHaveLength(0);
  await fireEvent.click(homeLink);
  expect(screen.queryAllByTestId("todo")).toHaveLength(0);

  //empty lists messages are presented when todos' lists are empty
  const emptyTodosMessage = screen.getByText(/there are no tasks/i);
  expect(emptyTodosMessage).toBeInTheDocument();
  await fireEvent.click(doneTodosLink);

  const emptyDoneTodosMessage = screen.getByText(
    /you don't have any tasks done/i
  );
  expect(emptyDoneTodosMessage).toBeInTheDocument();

  //clear all button is not visible when todos' list is empty
  expect(
    screen.queryByRole("button", { name: /clear all/i })
  ).not.toBeInTheDocument();

  //add new todo with a form
  await fireEvent.click(homeLink);
  userEvent.type(screen.getByPlaceholderText(/add a task/i), "go to the gym");
  await fireEvent.click(screen.getByRole("button", { name: "Add" }));
  expect(screen.queryAllByTestId("todo")).toHaveLength(1);
  expect(screen.getByLabelText(/go to the gym/i)).toBeInTheDocument();
});
