/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { jsx, Global } from "@emotion/core";
import { FaUser, FaClock } from "react-icons/fa";
import { NavBarItem } from "./components/ui";

import AllProjects from "./views/all-projects";
<<<<<<< HEAD
import History from "./views/history";
=======
import NavBar from "./components/navbar";
>>>>>>> Add css grid on index

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
<<<<<<< HEAD
      <Router>
        <AllProjects path="/" />
        <History path="/history" />
      </Router>
=======
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gridTemplateRows: "50px 1fr",
          gridTemplateAreas: '"navbar header" "navbar main"',
          height: "100vh"
        }}
      >
        <div
          css={{
            gridArea: "header",
            display: "flex",
            padding: "0 1em"
          }}
        >
          <h2>Header</h2>
          <div
            css={{
              display: "flex",
              marginLeft: "auto"
            }}
          >
            <NavBarItem
              styles={{
                "&:hover": {
                  cursor: "pointer",
                  background: "#f24c36",
                  color: "#FFF",
                  padding: "0 1em",
                  fontWeight: "bold"
                },
                padding: "0 1em"
              }}
            >
              <FaClock />
              <span
                css={{
                  marginLeft: "0.25em"
                }}
              >
                Log
              </span>
            </NavBarItem>
            <div
              css={{
                display: "flex",
                "@media (max-width: 768px)": {
                  display: "none"
                }
              }}
            >
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0.25em,",
                  fontSize: "1.5em"
                }}
              >
                <FaUser />
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.8em",
                  justifyContent: "center"
                }}
              >
                <span>Username</span>
                <span>Role</span>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
        <AllProjects />
      </div>
>>>>>>> Add css grid on index
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
