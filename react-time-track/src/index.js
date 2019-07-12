import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { jsx, Global } from "@emotion/core";

import AllProjects from "./views/all-projects";
import History from "./views/history";

const global = {
  body: {
    margin: 0,
    fontFamily: "'Nunito',sans-serif",
    fontSize: "15px",
    background: "#f2f3f5"
    // color: "#34495e"
  },
  "li, ul": {
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
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
