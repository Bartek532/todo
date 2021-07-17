import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewTodoItem } from "./NewTodoItem";

const mockedAddTodo = jest.fn((text: string) => text);

test("should not call addTodo func when form was submitted and input is empty", () => {
  render(<NewTodoItem addTodo={mockedAddTodo} />);

  const submitBtn = screen.getByRole("button", { name: /add/i });
  userEvent.click(submitBtn);

  expect(mockedAddTodo).not.toBeCalled();
});

test("should call addTodo func with given text when form is submitted and input is not empty", () => {
  render(<NewTodoItem addTodo={mockedAddTodo} />);

  const submitBtn = screen.getByRole("button", { name: /add/i });
  const input = screen.getByPlaceholderText(/add a task/i);

  userEvent.type(input, "go to the gym");
  userEvent.click(submitBtn);

  expect(mockedAddTodo).toBeCalled();
  expect(mockedAddTodo).toBeCalledWith("go to the gym");
});
