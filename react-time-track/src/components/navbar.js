/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { FaUser, FaClock } from "react-icons/fa";
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
        backgroundColor: "#fff",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,.12)",
        height: "3em",
        padding: "0 1em"
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
    </nav>
  );
}

export default NavBar;
