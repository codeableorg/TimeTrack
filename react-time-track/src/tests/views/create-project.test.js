import React from "react";
import { render } from "@testing-library/react";

import CreateProject from "../../views/create-project";

test("create-project component", () => {
  const { asFragment } = render(<CreateProject />);
  expect(asFragment()).toMatchSnapshot();
});
