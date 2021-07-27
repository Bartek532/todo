import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import TodoItem from "@/components/TodoItem.vue";

test("todo should not be checked when isDone is false", () => {
  const fakeTodo = {
    id: 1,
    text: "Clean bathroom",
    isDone: false,
  };

  render(TodoItem, {
    props: { todo: fakeTodo },
  });

  const todo = screen.getByLabelText(/clean bathroom/i);
  expect(todo).not.toBeChecked();
});

test("todo should be checked when isDone is true", () => {
  const fakeTodo = {
    id: 1,
    text: "Clean bathroom",
    isDone: true,
  };

  render(TodoItem, {
    props: { todo: fakeTodo },
  });

  const todo = screen.getByLabelText(/clean bathroom/i);
  expect(todo).toBeChecked();
});

test("should emit changeTodo event with proper values when checkbox is pressed", () => {
  const fakeTodo = {
    id: 1,
    text: "Clean bathroom",
    isDone: true,
  };

  const wrapper = render(TodoItem, {
    props: { todo: fakeTodo },
  });

  const todo = screen.getByLabelText(/clean bathroom/i);
  userEvent.click(todo);
  expect(wrapper.emitted().changeTodo[0][0]).toEqual({
    value: false,
    todoId: 1,
  });
});
