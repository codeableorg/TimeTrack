import React from "react";
import { render, wait } from "@testing-library/react";

import UserList from "../../components/user-list";

const users = [
  {
    id: 1,
    name: "Pedro Herrera",
    email: "pedrito@gmail.com",
    password_digest: null,
    role: "Owner",
    rate: 1800,
    created_at: "2019-07-12T21:02:03.682Z",
    updated_at: "2019-07-12T21:02:03.682Z"
  }
];

test("testing api", async () => {
  fetch.mockResponseOnce(JSON.stringify(users));
  const { getAllByRole } = render(<UserList />);
  let cards;
  await wait(() => {
    cards = getAllByRole("contentinfo");
  });

  expect(cards.length).toEqual(1);
});
