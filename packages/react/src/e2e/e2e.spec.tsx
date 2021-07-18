import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "App";

test("full app working", () => {
  render(<App />);

  //render all todos
  const todos = screen.getAllByLabelText(/(.*?)/i);
  expect(todos).toHaveLength(6);

  //one is checked
  expect(screen.getByLabelText(/go for a walk/i)).toBeChecked();

  //check other todo
  const todoToCheck = screen.getByLabelText(/call the dentist/i);
  userEvent.click(todoToCheck);
  expect(todoToCheck).toBeChecked();

  //checked todos are presented in done todos section
  userEvent.click(screen.getByRole("link", { name: /done todos/i }));
  expect(screen.getAllByLabelText(/(.*?)/i)).toHaveLength(2);

  //on delete button press done todo is deleted
  const deleteButton = screen.getAllByRole("button", {
    name: /delete todo/i,
  })[0];
  userEvent.click(deleteButton);
  expect(screen.getAllByLabelText(/(.*?)/i)).toHaveLength(1);
  userEvent.click(screen.getByRole("link", { name: /active todos/i }));
  expect(screen.getAllByLabelText(/(.*?)/i)).toHaveLength(5);
});
