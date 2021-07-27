import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import DoneTodoItem from "@/components/DoneTodoItem.vue";

test("should trigger deleteTodo func when delete (with x icon) button is pressed", () => {
  const fakeTodo = {
    id: 1,
    text: "Go with my dog",
    isDone: true,
  };

  const wrapper = render(DoneTodoItem, {
    props: { todo: fakeTodo },
  });

  const deleteButton = screen.getByRole("button", { name: /delete todo/i });
  userEvent.click(deleteButton);
  expect(wrapper.emitted().remove).toBeTruthy();
  expect(wrapper.emitted().remove[0]).toEqual([1]);
});
