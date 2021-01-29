import type { Todo } from "../todos";
import { ReactComponent as Done } from "../assets/icons/done.svg";
import styles from "../assets/styles/Todo.module.scss";
export const TodoItem = ({
  todo,
  toggleTodo
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
}) => {
  return (
    <article className={`${styles.todo} ${todo.isDone && styles.checked}`}>
      <button className={styles.toggle} onClick={() => toggleTodo(todo.id)}>
        <div className={styles.icon}>
          <Done />
        </div>
      </button>
      <span className={styles.text}>{todo.text}</span>
    </article>
  );
};
