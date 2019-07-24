import React from "react";
import { render } from "@testing-library/react";

import InputProjectInfo from "../../components/input-project-info";

test("Render close projects", () => {
  const { asFragment } = render(<InputProjectInfo />);
  expect(asFragment()).toMatchSnapshot();
});
