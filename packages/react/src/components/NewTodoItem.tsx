import { ChangeEvent, useState } from "react";
import styles from "../assets/styles/NewTodo.module.scss";

export const NewTodoItem = ({
  addTodo
}: {
  addTodo: (text: string) => void;
}) => {
  const [todoText, setTodoText] = useState("");

  const handleChangeTodoText = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoText("");
    return addTodo(todoText);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.speechBubble}>
      <input
        type="text"
        placeholder="Add a task"
        value={todoText}
        onChange={handleChangeTodoText}
        className={styles.addInput}
      />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
};
