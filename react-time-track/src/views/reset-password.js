/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "../components/ui";
import { reset } from "../services/password";
import { navigate } from "@reach/router";

function ResetPassword({ token }) {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [action, setAction] = React.useState("Confirm");
  const [error, setError] = React.useState(null);

  function handleChangeNewPassword(event) {
    setNewPassword(event.target.value);
  }

  function handleChangeConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setAction("Loading...");
    reset(token, newPassword)
      .then(response => {
        navigate("/login");
      })
      .catch(response => {
        setAction("Confirm");
        setError(response.message);
      });
  }

  const formStyle = {
    height: "350px",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
    padding: "1.5em",
    backgroundColor: "#eeeeee",
    borderRadius: "0.5em",
    width: "80%",
    "@media (min-width: 600px)": {
      width: "50%"
    }
  };

  const labelStyle = {
    fontSize: "1.5em",
    fontWeight: "bold"
  };

  const inputStyle = {
    fontSize: "20px",
    padding: "10px",
    outline: "none",
    border: "1px solid white",
    textAlign: "center",
    "&:focus": { borderBottom: "1px solid #000" }
  };

  const h1Style = {
    textAlign: "center",
    color: "#000",
    margin: "0.5em 0"
  };

  return (
    <div
      css={{
        minHeight: "100vh",
        margin: "0 0 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <form css={formStyle} onSubmit={handleSubmit}>
        <h1 css={h1Style}>Reset Password</h1>

        <label css={labelStyle} htmlFor="Username">
          New password
        </label>
        <input
          css={inputStyle}
          aria-label="Enter your new password"
          type="password"
          name="password"
          placeholder="Enter your new password"
          onChange={handleChangeNewPassword}
          value={newPassword}
          autoComplete="off"
          required
        />
        <br />
        <label css={labelStyle} htmlFor="Username">
          Confirm new password
        </label>
        <input
          css={inputStyle}
          aria-label="Confirm your new password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your new password"
          onChange={handleChangeConfirmPassword}
          value={confirmPassword}
          autoComplete="off"
          required
        />

        <Button type="submit" css={{ margin: "1em 0" }}>
          {action}
        </Button>
        {error && (
          <div
            css={{
              color: "red",
              fontWeight: "bold",
              fontSize: "1em",
              textAlign: "center"
            }}
          >
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default ResetPassword;
