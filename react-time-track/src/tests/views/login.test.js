import React from "react";
import {
  render,
  fireEvent,
  getNodeText,
  waitForElement
} from "@testing-library/react";

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

test("Test", async () => {
  const user = {};
  const setUser = jest.fn();
  const { getByLabelText } = render(
    <UserProvider user={user} setUser={setUser}>
      <Login />
    </UserProvider>
  );

  let Button = getByLabelText("Sign in user");
  const InputEmail = getByLabelText("Enter your email");
  const InputPassword = getByLabelText("Enter your password");

  expect(getNodeText(Button)).toBe("Log In");

  fireEvent.change(InputEmail, {
    target: { value: "nolan@vandervortdickinson.com" }
  });

  InputPassword.value = "123asdsd";

  console.log(InputEmail.value);
  console.log(InputPassword.value);

  fireEvent.click(Button);
  expect(getNodeText(Button)).toBe("Loading...");
  Button = await waitForElement(() => getByLabelText("Sign in user"));
  const ErrorMessage = getByLabelText("Error messages during signing in user");
  console.log(getNodeText(ErrorMessage));
  console.log("sadasd");
  expect(getNodeText(ErrorMessage)).not.toBeNull();

  // expect(setUser).toHaveBeenCalled();
});
