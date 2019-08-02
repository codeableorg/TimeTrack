import React from "react";
import { render } from "@testing-library/react";

import { UserProvider, UserContext } from "../../contexts/user";
import Home from "../../views/home";
import AllProjects from "../../views/all-projects";

test("Home component", () => {
  const user = {
    id: 2,
    name: "Brayan Manager",
    email: "linzeur@hotmail.com",
    role: "Manager",
    rate: 4300
  };
  localStorage.setItem("user", JSON.stringify(user));
  const { asFragment } = render(
    <UserProvider>
      <UserContext.Consumer>
        {logged => (
          <Home>
            <AllProjects />
          </Home>
        )}
      </UserContext.Consumer>
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
