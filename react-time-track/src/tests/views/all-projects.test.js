import React from "react";
import AllProject from "../../views/all-projects";
import { render } from "@testing-library/react";

test("Render all projects", () => {
  const { asFragment } = render(<AllProject />);
  expect(asFragment()).toMatchSnapshot();
});
