/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { FaUser, FaClock } from "react-icons/fa";

import { NavBarItem } from "./ui";
import Logout from "./logout";
import { UserContext } from "../contexts/user";

function Header({ title }) {
  const currentUser = React.useContext(UserContext).data;

  return (
    <div
      css={{
        gridArea: "header",
        display: "flex",
        margin: "0 25px",
        alignItems: "center",
        borderBottom: "1px solid #e8e8eb",
        height: "100%"
      }}
    >
      <h2
        css={{
          marginLeft: "1.5em",
          "@media (min-width: 960px)": {
            marginLeft: "0"
          }
        }}
      >
        {title}
      </h2>
      <div
        css={{
          display: "flex",
          alignItems: "center",
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
          link="/daily-log"
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
            display: "flex"
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "0 0.25em",
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
            <span>{currentUser.name}</span>
            <span>{currentUser.role}</span>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "0 0.25em"
            }}
          >
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
