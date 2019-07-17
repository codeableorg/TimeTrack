import React from "react";
import { render } from "@testing-library/react";

import { UserProvider } from "../../contexts/user";
import Login from "../../views/login";

test("login component", () => {
  const user = {};
  const setUser = jest.fn();
  const { asFragment } = render(
    <UserProvider user={user} setUser={setUser}>
      <Login />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
