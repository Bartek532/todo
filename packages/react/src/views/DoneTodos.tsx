import { memo, useCallback } from "react";
import { DoneTodoItem } from "components/DoneTodoItem/DoneTodoItem";
import styles from "assets/styles/Todos.module.scss";
import { useTodosContext } from "context/TodosContext";

export const DoneTodos = memo(() => {
  const { todos, setTodos } = useTodosContext();

  const doneTodos = todos.filter(({ isDone }) => isDone);

  const handleDeleteTodo = useCallback(
    (id: number) => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const deleteAllDoneTodos = useCallback(() => {
    setTodos(todos => todos.filter(({ isDone }) => !isDone));
  }, [todos]);

  if (!doneTodos.length) {
    return (
      <section className={styles.nothing}>
        You don't have any tasks done,
        <br />
        do something!
      </section>
    );
  }

  return (
    <main className={styles.main}>
      <section className={styles.doneTodos}>
        {doneTodos.map(todo => (
          <DoneTodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={handleDeleteTodo}
          />
        ))}
      </section>

      <div className={styles.clearAll}>
        <button onClick={deleteAllDoneTodos}>Clear all</button>
      </div>
    </main>
  );
});
