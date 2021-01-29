import { TodoItem } from "../components/TodoItem";
import { NewTodoItem } from "../components/NewTodoItem";
import { memo, useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import styles from "../assets/styles/Todos.module.scss";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";

export const MainTodos = memo(() => {
  const { todos, setTodos } = useContext(TodosContext);
  const [activeAddForm, setActiveAddForm] = useState(false);

  if (!todos.length) {
    return (
      <section className={styles.nothing}>
        There are no tasks,
        <br />
        everything is done!
      </section>
    );
  }

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

  const handleAddTodo = (text: string) => {
    setTodos(todos => [
      ...todos,
      { id: todos.length + 1, text, isDone: false }
    ]);
  };
  return (
    <>
      <section className={styles.todos}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={handleToggleTodo} />
        ))}
      </section>
      <section className={styles.newTodo}>
        <div
          className={styles.circle}
          onClick={() => setActiveAddForm(i => !i)}
        >
          <div className={`${styles.icon} ${activeAddForm && styles.active}`}>
            <Plus />
          </div>
        </div>
      </section>
      <section
        className={`${styles.newTodoField} ${
          activeAddForm && styles.newTodoFieldActive
        }`}
      >
        <NewTodoItem addTodo={handleAddTodo} />
      </section>
    </>
  );
});
