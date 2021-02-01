import { useState, createContext, Dispatch, SetStateAction } from "react";
import { todosList, Todo } from "../todos";

type TodoContext = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export const TodosContext = createContext<TodoContext>({
  todos: [],
  setTodos: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const TodosProvider = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>(todosList);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodosContext.Provider>
  );
};
