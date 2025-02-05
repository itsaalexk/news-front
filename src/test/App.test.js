import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renderiza el texto correctamente", () => {
  render(<App />);
  expect(screen.getByText("¡Hola, Bootstrap con React!")).toBeInTheDocument();
});
