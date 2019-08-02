/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "../components/ui";
import { login } from "../services/session";
import { navigate } from "@reach/router";
import { UserContext } from "../contexts/user";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const logged = React.useContext(UserContext);
  const [action, setAction] = React.useState("Log In");
  const [error, setError] = React.useState(null);

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAction("Loading...");
    login({ email, password })
      .then(response => {
        logged.onLogin(response);
        navigate("/");
      })
      .catch(response => {
        setAction("Log In");
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
        <h1 css={h1Style}>TimeTracker</h1>

        <label css={labelStyle} htmlFor="Username">
          Email
        </label>
        <input
          css={inputStyle}
          aria-label="Enter your email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChangeEmail}
          value={email}
          autoComplete="off"
          required
        />
        <br />
        <label css={labelStyle} htmlFor="Username">
          Password
        </label>
        <input
          css={inputStyle}
          aria-label="Enter your password"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChangePassword}
          value={password}
          autoComplete="off"
          required
        />
        <br />
        <label css={{ textAlign: "center" }}>
          <a href="/forgot-password">Forgot your password?</a>
        </label>
        <Button
          type="submit"
          css={{ margin: "1em 0" }}
          aria-label="Sign in user"
        >
          {action}
        </Button>
        {error && (
          <div
            aria-label="Error messages during signing in user"
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

export default Login;
