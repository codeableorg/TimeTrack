/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { jsx, Global } from "@emotion/core";

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
  }
};

function App() {
  return (
    <>
      <Global styles={global} />
      <Router>
        <AllProjects path="/" />
        <History path="/history" />
      </Router>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "50px 1fr",
          gridTemplateAreas: '"header" "main"',
          height: "100vh",
          "@media (min-width: 768px)": {
            gridTemplateColumns: "240px 1fr",
            gridTemplateAreas: '"navbar header" "navbar main"'
          }
        }}
      >
        <Header tittle="Projects" />
        <NavBar />
        <AllProjects />
      </div>
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
