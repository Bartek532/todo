import { useContext } from "react";
import { TodosContext } from "./context/TodosContext";

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error("...");
  }
  return context;
};
