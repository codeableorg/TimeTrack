import React from "react";
import { render } from "@testing-library/react";

import ResetPassword from "../../views/reset-password";

test("Reset password component", () => {
  const { asFragment } = render(<ResetPassword />);
  expect(asFragment()).toMatchSnapshot();
});
