import type { Todo } from "todos";
import { ReactComponent as Done } from "assets/icons/done.svg";
import styles from "assets/styles/Todo.module.scss";
export const TodoItem = ({
  todo,
  toggleTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
}) => {
  return (
    <label className={styles.todo}>
      <input
        type="checkbox"
        className={styles.todoInput}
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
      />
      <div className={styles.checkmark}>
        <Done className={styles.icon} />
      </div>
      <span className={styles.text}>{todo.text}</span>
    </label>
  );
};
