import React from "react";
import { render } from "@testing-library/react";

import ForgotPassword from "../../views/forgot-password";

test("Forgot password component", () => {
  const { asFragment } = render(<ForgotPassword />);
  expect(asFragment()).toMatchSnapshot();
});
