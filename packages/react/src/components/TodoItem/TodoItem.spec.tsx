import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItem } from "./TodoItem";

test("todo should not be checked when isDone is false", () => {
  const fakeTodo = {
    id: 1,
    text: "Clean bathroom",
    isDone: false,
  };

  render(<TodoItem todo={fakeTodo} toggleTodo={jest.fn()} />);

  const todo = screen.getByLabelText(/clean bathroom/i);
  expect(todo).not.toBeChecked();
});

test("todo should be checked when isDone is true", () => {
  const fakeTodo = {
    id: 1,
    text: "Clean bathroom",
    isDone: true,
  };

  render(<TodoItem todo={fakeTodo} toggleTodo={jest.fn()} />);

  const todo = screen.getByLabelText(/clean bathroom/i);
  expect(todo).toBeChecked();
});

test("should trigger toggleTodo func when checkbox is pressed", () => {
  const fakeTodo = {
    id: 1,
    text: "Clean bathroom",
    isDone: true,
  };
  const toggleTodo = jest.fn();

  render(<TodoItem todo={fakeTodo} toggleTodo={toggleTodo} />);

  const todo = screen.getByLabelText(/clean bathroom/i);
  userEvent.click(todo);
  expect(toggleTodo).toHaveBeenCalled();
});
