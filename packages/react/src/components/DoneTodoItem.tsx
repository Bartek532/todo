import type { Todo } from "../todos";
import styles from "../assets/styles/Todo.module.scss";
import { ReactComponent as Done } from "../assets/icons/done.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";

export const DoneTodoItem = ({
  todo,
  deleteTodo
}: {
  todo: Todo;
  deleteTodo: (id: number) => void;
}) => {
  return (
    <article className={`${styles.todo} ${styles.checked} ${styles.doneTodo}`}>
      <button className={styles.toggle}>
        <div className={styles.icon}>
          <Done />
        </div>
      </button>
      <div className={styles.text}>{todo.text}</div>
      <button className={styles.close} onClick={() => deleteTodo(todo.id)}>
        <Close />
      </button>
    </article>
  );
};
