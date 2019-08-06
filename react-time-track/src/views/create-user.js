/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";
import { createUser } from "../services/user";
import { UserContext } from "../contexts/user";

function CreateUser() {
  const logged = React.useContext(UserContext);
  //   const [error, setError] = React.useState(null);
  const alert = useAlert();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    role: "",
    password: "",
    rate: 0
  });

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      role: e.target.elements.role.value,
      rate: e.target.elements.rate.value,
      password: e.target.elements.password.value
    };

    createUser(userData)
      .then(response => {
        alert.success(`User ${user.name} was created successfully`);
        navigate("/users");
      })
      .catch(response => {
        console.log(response.message);
        if (response.message === "Access denied") logged.onLogout();
      });
  }

  return (
    <UserForm
      initialValue={{ user, setUser }}
      inputs={[
        ["name", "text"],
        ["email", "email"],
        ["password", "password"],
        ["rate", "number"]
      ]}
      onSubmitFn={handleSubmit}
    />
  );
}

export default CreateUser;
