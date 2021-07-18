import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "App";

test("full app working", () => {
  render(<App />);

  //render all todos
  const todos = screen.getAllByTestId("todo");
  expect(todos).toHaveLength(5);

  //one is checked
  expect(screen.getByLabelText(/go for a walk/i)).toBeChecked();

  //check other todo
  const todoToCheck = screen.getByLabelText(/call the dentist/i);
  userEvent.click(todoToCheck);
  expect(todoToCheck).toBeChecked();

  //checked todos are presented in done todos section
  userEvent.click(screen.getByRole("link", { name: /done todos/i }));
  expect(screen.getAllByTestId("done-todo")).toHaveLength(2);

  //on delete button press done todo is deleted
  const deleteButton = screen.getAllByRole("button", {
    name: /delete todo/i,
  })[0];
  userEvent.click(deleteButton);
  expect(screen.getAllByTestId("done-todo")).toHaveLength(1);
  userEvent.click(screen.getByRole("link", { name: /active todos/i }));
  expect(screen.getAllByTestId("todo")).toHaveLength(4);

  //clear all button cleared all todos which are done
  //but first check all todos ;)
  userEvent.click(screen.getByLabelText(/read an article/i));
  userEvent.click(screen.getByLabelText(/check in to flight/i));
  userEvent.click(screen.getByLabelText(/create new project/i));
  userEvent.click(screen.getByRole("link", { name: /done todos/i }));
  userEvent.click(screen.getByRole("button", { name: /clear all/i }));
  expect(screen.queryAllByTestId("done-todo")).toHaveLength(0);
  userEvent.click(screen.getByRole("link", { name: /active todos/i }));
  expect(screen.queryAllByTestId("todo")).toHaveLength(0);

  //empty list messages are presented when todos' lists are empty
  const emptyTodosMessage = screen.getByText(/there are no tasks/i);
  expect(emptyTodosMessage).toBeInTheDocument();
  userEvent.click(screen.getByRole("link", { name: /done todos/i }));

  const emptyDoneTodosMessage = screen.getByText(
    /you don't have any tasks done/i
  );
  expect(emptyDoneTodosMessage).toBeInTheDocument();

  //clear all button is not visible
  expect(
    screen.queryByRole("button", { name: /clear all/i })
  ).not.toBeInTheDocument();

  //add new todo with add new todo form
  userEvent.click(screen.getByRole("link", { name: /active todos/i }));
  userEvent.type(screen.getByPlaceholderText(/add a task/i), "go to the gym");
  userEvent.click(screen.getByRole("button", { name: "Add" }));
  expect(screen.queryAllByTestId("todo")).toHaveLength(1);
});
