import React from "react";
import { render } from "@testing-library/react";

import History from "../../views/history";

test("Render close projects", () => {
  const { asFragment } = render(<History />);
  expect(asFragment()).toMatchSnapshot();
});
