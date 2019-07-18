/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";
import { FaBars } from "react-icons/fa";

import NavBar from "../components/navbar";
import Header from "../components/header";

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

function Home({ children }) {
  const [navBarActive, setNavBarActive] = React.useState("translateX(-245px)");

  function togleNavBar() {
    navBarActive === "translateX(-245px)"
      ? setNavBarActive("translateX(0)")
      : setNavBarActive("translateX(-245px)");
  }

  return (
    <div css={gridContainer}>
      <div css={menuIcon} onClick={togleNavBar}>
        <FaBars />
      </div>
      <NavBar navBarActive={navBarActive} togleNavBar={togleNavBar} />
      <Router
        css={{
          gridArea: "header"
        }}
      >
        <Header tittle="Projects" path="/" />
        <Header tittle="History" path="/history" />
        <Header tittle="Members" path="/members" />
      </Router>

      <div
        css={{
          gridArea: "main",
          marginTop: "0.5em"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Home;
