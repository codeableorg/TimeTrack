/** @jsx jsx */
import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { jsx, Global } from "@emotion/core";
import { FaBars } from "react-icons/fa";
import AllProjects from "./views/all-projects";
import History from "./views/history";
import NavBar from "./components/navbar";
import Header from "./components/header";

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
  const [navBarActive, setNavBarActive] = useState("translateX(-245px)");

  function togleNavBar() {
    navBarActive === "translateX(-245px)"
      ? setNavBarActive("translateX(0)")
      : setNavBarActive("translateX(-245px)");
  }
  return (
    <div css={gridContainer}>
      <Global styles={global} />
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
      </Router>
    </div>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
