/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";
import { FaBars } from "react-icons/fa";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import NavBar from "../components/navbar";
import Header from "../components/header";
import { UserContext } from "../contexts/user";

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "50px 1fr",
  gridTemplateAreas: '"header" "main"',
  height: "100vh",
  "@media (min-width: 960px)": {
    gridTemplateColumns: "240px 1fr",
    gridTemplateAreas: '"navbar header" "navbar main"'
  }
};

const menuIcon = {
  position: "fixed",
  display: "flex",
  top: "5px",
  left: "10px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#DADAE3",
  borderRadius: "50%",
  zIndex: "1",
  cursor: "pointer",
  padding: "12px"
};

const options = {
  position: "bottom right",
  timeout: 5000,
  offset: "0px",
  transition: "scale"
};

function Home({ children }) {
  const [navBarActive, setNavBarActive] = React.useState("translateX(-245px)");
  const currentUser = React.useContext(UserContext).data;

  function toggleNavBar() {
    navBarActive === "translateX(-245px)"
      ? setNavBarActive("translateX(0)")
      : setNavBarActive("translateX(-245px)");
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div css={gridContainer}>
        <div css={menuIcon} onClick={toggleNavBar}>
          <FaBars />
        </div>
        <NavBar navBarActive={navBarActive} togleNavBar={toggleNavBar} />
        <Router
          css={{
            gridArea: "header"
          }}
        >
          <Header
            title={currentUser.role === "Analyst" ? "My Status" : "Projects"}
            path="/"
          />
          <Header title="My Status" path="/mystatus" />
          <Header title="History" path="/history" />
          <Header title="Members" path="/members" />
          <Header title="Project" path="/projects/:id" />
          <Header
            tittle="Specific Status"
            path="/projects/:project_id/users/:user_id"
          />
          <Header
            tittle="Specific Status"
            path="/users/:user_id/projects/:project_id"
          />
          <Header title="Create Project" path="/create-project" />
          <Header title="Daily Log" path="/daily-log" />
          <Header title="Manage Users" path="/users" />
          <Header title="Edit User" path="/users/:id" />
          <Header title="New User" path="/users/new" />
        </Router>

        <div
          css={{
            gridArea: "main",
            marginTop: "0.5em",
            overflow: "auto"
          }}
        >
          {children}
        </div>
      </div>
    </AlertProvider>
  );
}

export default Home;
