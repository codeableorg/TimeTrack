/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { NavBarItem } from "../components/ui";

function NavBar() {
  const [navBarClass, setNavBarClass] = useState("");

  function togleNavBar() {
    navBarClass === "" ? setNavBarClass("hide") : setNavBarClass("");
  }

  const hide = {
    "@media (max-width: 768px)": {
      display: "none"
    }
  };

  return (
    <nav
      css={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,.12)",
        height: "3em",
        padding: "0 1em",
        gridArea: "navbar"
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          fontSize: "1.2em",
          fontWeight: "bold",
          "@media (max-width: 768px)": {
            display: "none"
          }
        }}
      >
        Timer Tracker
      </div>
      <ul
        css={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "0.5em",
          "@media (max-width: 768px)": {
            display: "none"
          }
        }}
      >
        <NavBarItem>My status</NavBarItem>
        <NavBarItem>Projects</NavBarItem>
        <NavBarItem>Members</NavBarItem>
        <NavBarItem>History</NavBarItem>
        <NavBarItem>Reports</NavBarItem>
        <NavBarItem>User Settings</NavBarItem>
      </ul>
    </nav>
  );
}

export default NavBar;
