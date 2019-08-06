import React from "react";
import { render } from "@testing-library/react";

import AllProject from "../../views/all-projects";
import { UserProvider, UserContext } from "../../contexts/user";

test("Render all projects", () => {
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
      <UserContext.Consumer>{logged => <AllProject />}</UserContext.Consumer>
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
