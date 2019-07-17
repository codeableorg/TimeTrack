/** @jsx jsx */
import { useState } from "react";
import { render } from "react-dom";
import { Router, Redirect } from "@reach/router";
import { jsx, Global } from "@emotion/core";
import { FaBars } from "react-icons/fa";

import { UserProvider } from "./contexts/user";
import Login from "./views/login";
import AllProjects from "./views/all-projects";
import History from "./views/history";
import NavBar from "./components/navbar";
import Header from "./components/header";
import UserList from "./components/user-list";

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

function App() {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  function handleCurrentUser(newValue) {
    localStorage.setItem("user", JSON.stringify(newValue));
    setCurrentUser(newValue);
  }

  const [navBarActive, setNavBarActive] = useState("translateX(-245px)");

  function togleNavBar() {
    navBarActive === "translateX(-245px)"
      ? setNavBarActive("translateX(0)")
      : setNavBarActive("translateX(-245px)");
  }
  return (
    <UserProvider user={currentUser} setUser={handleCurrentUser}>
      <Global styles={global} />
      <Router>
        <Login path="/login" />
      </Router>
      {currentUser.name ? (
        <>
          <Redirect from="/login" to="/" noThrow />
          <div css={gridContainer}>
            <div css={menuIcon} onClick={togleNavBar}>
              <FaBars />
            </div>
            <Router
              css={{
                gridArea: "header"
              }}
            >
              <Header tittle="Projects" path="/" />
              <Header tittle="History" path="/history" />
              <Header tittle="Members" path="/members" />
            </Router>

            <NavBar navBarActive={navBarActive} togleNavBar={togleNavBar} />
            <Router
              css={{
                gridArea: "main",
                marginTop: "0.5em"
              }}
            >
              <AllProjects path="/" />
              <History path="/history" />
              <UserList path="/members" />
            </Router>
          </div>
        </>
      ) : (
        window.location.pathname !== "/login" && (
          <Redirect from={window.location.pathname} to="/login" noThrow />
        )
      )}
    </UserProvider>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
