import React from "react";
import { render, wait } from "@testing-library/react";

import ClosedProjects from "../../components/closed-projects";

const closedProjects = [
  {
    name: "Project Rumi",
    category: "Eduaction",
    client: "MINEDU",
    closed: true,
    id: 1
  }
];

test("Testing API history", async () => {
  fetch.mockResponseOnce(JSON.stringify(closedProjects));

  const { getAllByRole } = render(<ClosedProjects />);
  let cards;
  await wait(() => {
    cards = getAllByRole("listitem");
  });

  expect(cards.length).toEqual(1);
});
