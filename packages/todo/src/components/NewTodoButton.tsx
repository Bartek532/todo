import styles from "../assets/styles/NewTodo.module.scss";
import { useState, memo, useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { NewTodoItem } from "./NewTodoItem";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";

export const NewTodoButton = memo(() => {
  const { setTodos } = useContext(TodosContext);
  const [activeAddForm, setActiveAddForm] = useState(false);

  const handleAddTodo = (text: string) => {
    if (text && text.trim().length) {
      setTodos(todos => [
        ...todos,
        { id: todos.length + 1, text, isDone: false }
      ]);
    }
  };

  return (
    <>
      <section className={styles.newTodo}>
        <div
          className={styles.circle}
          onClick={() => setActiveAddForm(i => !i)}
        >
          <div className={`${styles.icon} ${activeAddForm && styles.active}`}>
            <Plus />
          </div>
        </div>
      </section>
      <section
        className={`${styles.newTodoField} ${
          activeAddForm && styles.newTodoFieldActive
        }`}
      >
        <NewTodoItem addTodo={handleAddTodo} />
      </section>
    </>
  );
});
