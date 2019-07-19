import React from "react";
import { render } from "@testing-library/react";

import { UserProvider } from "../../contexts/user";
import Home from "../../views/home";
import AllProjects from "../../views/all-projects";

test("Home component", () => {
  const user = {};
  const setUser = jest.fn();
  const { asFragment } = render(
    <UserProvider user={user} setUser={setUser}>
      <Home>
        <AllProjects />
      </Home>
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
