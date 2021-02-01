import { TodoItem } from "../components/TodoItem";
import { memo } from "react";
import styles from "../assets/styles/Todos.module.scss";
import { NewTodoButton } from "../components/NewTodoButton";
import { useTodosContext } from "../useTodosContext";

export const MainTodos = memo(() => {
  const { todos, setTodos } = useTodosContext();

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(item => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  };

  if (!todos.length) {
    return (
      <>
        <section className={styles.nothing}>
          There are no tasks,
          <br />
          everything is done!
        </section>
        <NewTodoButton />
      </>
    );
  }

  return (
    <main className={styles.main}>
      <section className={styles.todos}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={handleToggleTodo} />
        ))}
      </section>
      <NewTodoButton />
    </main>
  );
});
