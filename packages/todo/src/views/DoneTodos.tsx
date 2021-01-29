import { TodosContext } from "../context/TodosContext";
import { useContext, memo } from "react";
import { DoneTodoItem } from "../components/DoneTodoItem";
import styles from "../assets/styles/Todos.module.scss";

export const DoneTodos = memo(() => {
  const { todos, setTodos } = useContext(TodosContext);

  const doneTodos = todos.filter(({ isDone }) => isDone);

  if (!doneTodos.length) {
    return (
      <div className={styles.nothing}>
        You don't have any tasks done,
        <br />
        do something!
      </div>
    );
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const deleteAllDoneTodos = () => {
    setTodos(todos => todos.filter(({ isDone }) => !isDone));
  };

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
