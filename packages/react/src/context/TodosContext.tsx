import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { todosList, Todo } from "todos";

type TodoContext = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const TodosContext = createContext<TodoContext>({
  todos: [],
  setTodos: () => {},
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

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error("useTodosContext must be used within a TodosProvider");
  }
  return context;
};
