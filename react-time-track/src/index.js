import React from "react";
import { render } from "react-dom";
import { jsx, Global } from "@emotion/core";

import AllProjects from "./views/all-projects";

const global = {
  body: {
    margin: 0,
    fontFamily: "'Nunito',sans-serif",
    fontSize: "15px",
    background: "#f2f3f5"
    // color: "#34495e"
  }
};

function App() {
  return (
    <>
      <Global styles={global} />
      <AllProjects />
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
