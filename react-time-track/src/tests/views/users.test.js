import React from "react";
import { render } from "@testing-library/react";
import AllUsers from "../../views/users";

test("Render all users", () => {
  const { asFragment } = render(<AllUsers />);
  expect(asFragment()).toMatchSnapshot();
});