import { TodoItem } from "../components/TodoItem";
import { memo, useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import styles from "../assets/styles/Todos.module.scss";
import { NewTodoButton } from "../components/NewTodoButton";

export const MainTodos = memo(() => {
  const { todos, setTodos } = useContext(TodosContext);

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