import styles from "../../assets/styles/NewTodo.module.scss";
import { useState, memo } from "react";
import { NewTodoItem } from "../NewTodoItem/NewTodoItem";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { useTodosContext } from "../../useTodosContext";
import classNames from "classnames";

export const NewTodoButton = memo(() => {
  const { setTodos } = useTodosContext();
  const [activeAddForm, setActiveAddForm] = useState(false);

  const handleAddTodo = (text: string) => {
    setTodos(todos => [
      ...todos,
      { id: todos.length + 1, text, isDone: false },
    ]);
  };

  return (
    <>
      <section className={styles.newTodo}>
        <button
          className={styles.circle}
          onClick={() => setActiveAddForm(i => !i)}
        >
          <span className="sr-only">add todo</span>
          <div
            className={classNames(styles.icon, {
              [styles.active]: activeAddForm,
            })}
          >
            <Plus />
          </div>
        </button>
      </section>
      <article
        className={classNames(styles.newTodoField, {
          [styles.newTodoFieldActive]: activeAddForm,
        })}
        aria-label="add-form"
      >
        <NewTodoItem addTodo={handleAddTodo} />
      </article>
    </>
  );
});
