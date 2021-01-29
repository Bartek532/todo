import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainTodos } from "./views/MainTodos";
import { DoneTodos } from "./views/DoneTodos";
import { Navbar } from "./components/Navbar";
import { TodosProvider } from "./context/TodosContext";

export const App = () => {
  return (
    <TodosProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainTodos} />
          <Route path="/done" component={DoneTodos} />
        </Switch>
      </Router>
    </TodosProvider>
  );
};
