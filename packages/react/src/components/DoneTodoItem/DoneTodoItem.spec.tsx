import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DoneTodoItem } from "./DoneTodoItem";

test("should trigger deleteTodo func when delete (with x icon) button is pressed", () => {
  const fakeTodo = {
    id: 1,
    text: "Go with my dog",
    isDone: true,
  };

  const deleteTodo = jest.fn();

  render(<DoneTodoItem todo={fakeTodo} deleteTodo={deleteTodo} />);

  const deleteButton = screen.getByRole("button", { name: /delete todo/i });
  userEvent.click(deleteButton);
  expect(deleteTodo).toHaveBeenCalled();
});
