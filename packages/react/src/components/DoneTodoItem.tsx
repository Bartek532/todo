import type { Todo } from "../todos";
import styles from "../assets/styles/Todo.module.scss";
import { ReactComponent as Done } from "../assets/icons/done.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";

export const DoneTodoItem = ({
  todo,
  deleteTodo,
}: {
  todo: Todo;
  deleteTodo: (id: number) => void;
}) => {
  return (
    <label className={styles.doneTodo}>
      <input type="checkbox" className={styles.todoInput} checked disabled />
      <div className={styles.checkmark}>
        <Done className={styles.icon} />
      </div>
      <span className={styles.text}>{todo.text}</span>
      <button className={styles.remove} onClick={() => deleteTodo(todo.id)}>
        <Close />
      </button>
    </label>
  );
};
