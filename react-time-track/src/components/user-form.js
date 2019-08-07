/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { UserInput, UserCard, Button } from "../components/ui";

const labelStyle = {
  fontWeight: "600",
  fontSize: "16px",
  width: 150,
  display: "flex",
  alignItems: "center"
};

const selectStyle = { width: 150, fontSize: "1rem", padding: ".5rem" };

function UserForm({ initialValue, inputs, onSubmitFn }) {
  function handleChange(e, key) {
    initialValue.setUser({ ...initialValue.user, [key]: e.target.value });
  }

  return (
    <UserCard
      css={{
        maxWidth: "500px",
        margin: "auto",
        paddingTop: ".5rem"
      }}
    >
      <form onSubmit={onSubmitFn}>
        {inputs.map(element => (
          <div css={{ marginTop: "2em", display: "flex" }} key={element[0]}>
            <label css={labelStyle} htmlFor={element[0]}>
              {element[0][0].toUpperCase() + element[0].slice(1)}
            </label>
            <UserInput
              type={element[1]}
              autoComplete="off"
              id={element[0]}
              name={element[0]}
              placeholder={`Enter ${element[0]}`}
              aria-label={`Enter ${element[0]}`}
              value={initialValue.user[element[0]]}
              onChange={event => handleChange(event, element[0])}
              {...element[1] === "number" && { min: "0" }}
              required
            />
          </div>
        ))}
        <div css={{ marginTop: "2em", display: "flex" }}>
          <label css={{ ...labelStyle, width: "25%" }} htmlFor="role">
            Role
          </label>
          <select
            css={selectStyle}
            id="role"
            name="role"
            onChange={event => handleChange(event, "role")}
            value={initialValue.user["role"]}
            required
          >
            <option value="Analyst">Analyst</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div css={{ marginTop: "3em" }}>
          <Button>Save Changes</Button>
        </div>
        {initialValue.error && (
          <div
            aria-label="Error messages during the creation of user"
            css={{
              color: "red",
              fontWeight: "bold",
              fontSize: "1em",
              textAlign: "center"
            }}
          >
            {initialValue.error}
          </div>
        )}
      </form>
    </UserCard>
  );
}

export default UserForm;
