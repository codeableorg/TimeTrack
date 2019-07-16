/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { NavBarItem } from "./ui";
import { FaUser, FaClock, FaBars } from "react-icons/fa";

function Header({ tittle }) {
  return (
    <div
      css={{
        gridArea: "header",
        display: "flex",
        margin: "0 25px",
        alignItems: "center",
        borderBottom: "1px solid #e8e8eb"
      }}
    >
      <div
        css={{
          margin: " 0 0.25em 0 -0.75em",
          fontSize: "1.5em",
          display: "flex",
          zIndex: "1",
          cursor: "pointer",
          "@media (min-width: 768px)": {
            display: "none"
          }
        }}
      >
        <FaBars />
      </div>
      <h2>{tittle}</h2>
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
  );
}

export default Header;
