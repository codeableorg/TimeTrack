/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { NavBarItem } from "../components/ui";
import { FaTimes } from "react-icons/fa";
import { Link } from "@reach/router";

function NavBar({ navBarActive, togleNavBar }) {
  const navBar = {
    gridArea: "sidenav",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "200px",
    position: "fixed",
    overflowY: "auto",
    zIndex: "2",
    transform: navBarActive,
    transition: "all .6s ease-in-out",
    backgroundColor: "#fff",
    boxShadow: "2px 0px 5px 1px rgba(0,0,0,.05)",
    padding: "0 1em",
    "@media (min-width: 960px)": {
      transform: "translateX(0)"
    }
  };

  return (
    <nav css={navBar}>
      <div
        css={{
          fontSize: "1.5em",
          fontWeight: "bold",
          padding: "0.5em 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>Timer Tracker</span>
        <span
          css={{
            display: "flex",
            "@media (min-width: 960px)": {
              visibility: "hidden"
            }
          }}
          onClick={togleNavBar}
        >
          <FaTimes />
        </span>
      </div>
      <ul
        css={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Link to="/" onClick={togleNavBar}>
          <NavBarItem>My status</NavBarItem>
        </Link>
        <Link to="/" onClick={togleNavBar}>
          <NavBarItem>Projects</NavBarItem>
        </Link>
        <Link to="/" onClick={togleNavBar}>
          <NavBarItem>Members</NavBarItem>
        </Link>
        <Link to="/history" onClick={togleNavBar}>
          <NavBarItem>History</NavBarItem>
        </Link>
        <Link to="/" onClick={togleNavBar}>
          <NavBarItem>User Settings</NavBarItem>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
