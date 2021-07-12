import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { App } from "../../App";

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  //render todos view
  expect(screen.getByText(/check in to flight/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole("link", { name: /done todos/i }));

  //render done todos view
  expect(screen.getByText(/go for a walk/i)).toBeInTheDocument();
});
