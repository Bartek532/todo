import { screen, render, fireEvent } from "@testing-library/vue";
import NewTodoItem from "@/components/NewTodoItem";

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
