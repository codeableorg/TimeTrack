/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router, Redirect } from "@reach/router";
import { jsx, Global } from "@emotion/core";
import { UserProvider } from "./contexts/user";

import Login from "./views/login";
import Home from "./views/home";
import ForgotPassword from "./views/forgot-password";
import AllProjects from "./views/all-projects";
import History from "./views/history";
import UserList from "./components/user-list";
import ResetPassword from "./views/reset-password";

const global = {
  body: {
    margin: 0,
    fontFamily: "'Nunito',sans-serif",
    fontSize: "15px",
    background: "#f2f3f5"
  },
  "li, ul, h1, h2, h3, h4": {
    listStyle: "none",
    margin: "0",
    padding: "0"
  },
  a: {
    textDecoration: "none",
    color: "inherit"
  }
};

function App() {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  function handleCurrentUser(newValue) {
    localStorage.setItem("user", JSON.stringify(newValue));
    setCurrentUser(newValue);
  }

  return (
    <UserProvider user={currentUser} setUser={handleCurrentUser}>
      <Global styles={global} />
      <Router>
        {currentUser.name ? (
          <Redirect
            from="/login"
            to={
              window.location.pathname === "/login"
                ? "/"
                : window.location.pathname
            }
            noThrow
          />
        ) : (
          window.location.pathname !== "/login" &&
          window.location.pathname.indexOf("/reset-password") === -1 &&
          window.location.pathname !== "/forgot-password" && (
            <Redirect from={window.location.pathname} to="/login" noThrow />
          )
        )}
        <Login path="/login" />
        <ForgotPassword path="/forgot-password" />
        <ResetPassword path="/reset-password/:token" />
        <Home path="/">
          <AllProjects path="/" />
          <History path="/history" />
          <UserList path="/members" />
        </Home>
      </Router>
    </UserProvider>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
