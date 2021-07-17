import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewTodoButton } from "./NewTodoButton";

test("should properly switch between hide/show states of add todo form", () => {
  render(<NewTodoButton />);
  const toggleBtn = screen.getByRole("button", { name: /add todo/i });
  const form = screen.getByRole("article", { name: /add-form/i });

  expect(form).not.toHaveClass("newTodoFieldActive");
  userEvent.click(toggleBtn);
  expect(form).toHaveClass("newTodoFieldActive");
  userEvent.click(toggleBtn);
  expect(form).not.toHaveClass("newTodoFieldActive");
});
