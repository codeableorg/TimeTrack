import React from "react";
import { render, fireEvent } from "@testing-library/react";

import InputProjectInfo from "../../components/input-project-info";

test("input-project-info component", () => {
  const { asFragment } = render(<InputProjectInfo />);
  expect(asFragment()).toMatchSnapshot();
});

test("Save data in session storage while you enter text", () => {
  const { getByLabelText } = render(<InputProjectInfo />);
  let infoProject = JSON.parse(sessionStorage.getItem("InfoNewProject"));
  expect(infoProject["title"]).toBe("");
  const titleInput = getByLabelText("Enter the Title of the project");
  fireEvent.change(titleInput, { target: { value: "Test title project" } });
  infoProject = JSON.parse(sessionStorage.getItem("InfoNewProject"));
  expect(infoProject["title"]).toBe("Test title project");
});
