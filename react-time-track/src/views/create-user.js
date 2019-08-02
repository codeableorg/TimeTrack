/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { UserInput, Label, UserCard, Button } from "../components/ui";
import { createUser } from "../services/user";
import { navigate } from "@reach/router";
import { UserContext } from "../contexts/user";

function CreateUser() {
  const logged = React.useContext(UserContext);
  //   const [error, setError] = React.useState(null);

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
      .then(response => navigate("/users"))
      .catch(response => {
        if (response.message === "Access denied") logged.onLogout();
      });
  }

  return (
    <UserCard
      css={{
        maxWidth: "500px",
        margin: "auto"
      }}
    >
      <form onSubmit={handleSubmit}>
        <div css={{ marginTop: "2em" }}>
          <Label htmlFor="name">Name</Label>
          <UserInput
            aria-label="enter name"
            required="required"
            autoComplete="off"
            id="name"
            name="name"
            type="text"
            placeholder="User name"
          />
        </div>
        <div css={{ marginTop: "2em" }}>
          <Label htmlFor="email">Email</Label>
          <UserInput
            aria-label="enter email"
            required="required"
            autoComplete="off"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div css={{ marginTop: "2em" }}>
          <Label htmlFor="password">Password</Label>
          <UserInput
            aria-label="enter password"
            required="required"
            autoComplete="off"
            id="password"
            name="password"
            type="password"
            placeholder="Enter a password"
          />
        </div>
        <div css={{ marginTop: "2em" }}>
          <Label htmlFor="role">Role</Label>
          <UserInput
            aria-label="enter role"
            required="required"
            autoComplete="off"
            id="role"
            name="role"
            type="text"
            placeholder="role"
          />
        </div>
        <div css={{ marginTop: "2em" }}>
          <Label htmlFor="rate">Rate</Label>
          <UserInput
            aria-label="enter rate"
            required="required"
            autoComplete="off"
            id="rate"
            name="rate"
            type="text"
            placeholder="rate"
          />
        </div>

        <div css={{ marginTop: "3em" }}>
          <Button>ADD USER</Button>
        </div>
      </form>
    </UserCard>
  );
}

export default CreateUser;
