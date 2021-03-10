import type { Todo } from "../todos";
import { ReactComponent as Done } from "../assets/icons/done.svg";
import styles from "../assets/styles/Todo.module.scss";
import classNames from "classnames";
export const TodoItem = ({
  todo,
  toggleTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
}) => {
  return (
    <article
      className={classNames(styles.todo, { [styles.checked]: todo.isDone })}
    >
      <button className={styles.toggle} onClick={() => toggleTodo(todo.id)}>
        <span className="sr-only">toggle done todo</span>
        <div className={styles.icon}>
          <Done />
        </div>
      </button>
      <span className={styles.text}>{todo.text}</span>
    </article>
  );
};
