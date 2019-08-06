import React from "react";
import { render, wait } from "@testing-library/react";

import ListProjects from "../../components/list-projects";
import { UserProvider, UserContext } from "../../contexts/user";

const projects = [
  {
    category: "Education",
    client: "MINEDU",
    closed: false,
    created_at: "2019-07-11T20:14:25.250Z",
    end: null,
    estimated_cost: null,
    id: 1,
    name: "Project Rumi",
    real_cost: null,
    start: null,
    updated_at: "2019-07-11T20:14:25.250Z"
  }
];

test("testing api", async () => {
  fetch.mockResponseOnce(JSON.stringify(projects));

  const user = {
    id: 2,
    name: "Brayan Manager",
    email: "linzeur@hotmail.com",
    role: "Manager",
    rate: 4300
  };
  localStorage.setItem("user", JSON.stringify(user));
  const { getAllByRole } = render(
    <UserProvider>
      <UserContext.Consumer>{logged => <ListProjects />}</UserContext.Consumer>
    </UserProvider>
  );

  let cards;
  await wait(() => {
    cards = getAllByRole("list");
  });

  expect(cards.length).toEqual(1);
});
