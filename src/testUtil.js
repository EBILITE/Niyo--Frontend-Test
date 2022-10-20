import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

export const renderer = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { renderer as render };
