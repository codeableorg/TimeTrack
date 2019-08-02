/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Router, Redirect } from "@reach/router";

import { UserContext } from "./contexts/user";
import Login from "./views/login";
import Home from "./views/home";
import ForgotPassword from "./views/forgot-password";
import AllProjects from "./views/all-projects";
import History from "./views/history";
import Project from "./views/project";
import UserList from "./components/user-list";
import ResetPassword from "./views/reset-password";
import CreateProject from "./views/create-project";
import CreateUser from "./views/create-user";
import Users from "./views/users";
import DailyLog from "./views/daily-log";
import EditUser from "./views/edit-user";
import MyStatus from "./views/my-status";

function App() {
  const logged = React.useContext(UserContext);
  const currentUser = React.useContext(UserContext).data;

  return (
    <Router>
      {logged.data ? (
        <Redirect from="/login" to="/" noThrow />
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
        <MyStatus path={currentUser.role === "Analyst" ? "/" : "/mystatus"} />
        <AllProjects path="/" />
        <History path="/history" />
        <UserList path="/members" />
        <Project path="/projects/:project_id" />
        <CreateProject path="/create-project" />
        <CreateUser path="/create-user" />
        <Users path="/users" />
        <DailyLog path="/daily-log" />
        <EditUser path="edit-user/:user_id" />
      </Home>
    </Router>
  );
}

export default App;
