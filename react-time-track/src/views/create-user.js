/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { UserInput, Label, UserCard, Button } from "../components/ui";
import { createUser } from "../services/user";

function CreateUser() {
  const [userData, setUserData] = React.useState(null);
//   const [error, setError] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setUserData({
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            role: e.target.elements.role.value,
            rate: e.target.elements.rate.value,
            password: e.target.elements.password.value
        })
    
 
  }

  React.useEffect(()=>{
    if (!userData) return;
    createUser(userData);
}, [userData])

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
          <Label htmlFor="password">Passoword</Label>
          <UserInput
            aria-label="enter password"
            required="required"
            autoComplete="off"
            id="password"
            name="password"
            type="text"
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
