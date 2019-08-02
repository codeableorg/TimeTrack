import React from "react";
import { render, wait } from "@testing-library/react";

import { act } from "react-dom/test-utils";

import ListProjects from "../../components/list-projects";

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

  const { getAllByRole } = render(<ListProjects />);
  let cards;
  await wait(() => {
    cards = getAllByRole("listitem");
  });

  expect(cards.length).toEqual(1);
});
