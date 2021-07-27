import { screen, render, fireEvent } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import NewTodoItem from "@/components/NewTodoItem";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

test("should properly switch between hide/show states of add todo form", async () => {
  render(NewTodoItem);
  const toggleBtn = screen.getByRole("button", { name: /plus/i });
  const form = screen.getByRole("form", { name: /add-form/i });

  expect(form).not.toHaveClass("active");
  await fireEvent.click(toggleBtn);
  expect(form).toHaveClass("active");
  await fireEvent.click(toggleBtn);
  expect(form).not.toHaveClass("active");
});

describe("adding todo", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      addTodo: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it("should not call addTodo func when form was submitted and input is empty", () => {
    render(NewTodoItem, { store });

    const submitBtn = screen.getByRole("button", { name: /add/i });
    userEvent.click(submitBtn);

    expect(actions.addTodo).not.toHaveBeenCalled();
  });

  it("should call addTodo func with given text when form is submitted and input is not empty", async () => {
    render(NewTodoItem, { store });

    const submitBtn = screen.getByRole("button", { name: /add/i });
    const input = screen.getByPlaceholderText(/add a task/i);

    userEvent.type(input, "go to the gym");
    userEvent.click(submitBtn);

    expect(actions.addTodo).toHaveBeenCalled();
  });
});
