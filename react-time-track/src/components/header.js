/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { FaUser, FaClock, FaInfo } from "react-icons/fa";

import { NavBarItem } from "./ui";
import Logout from "./logout";
import { UserContext } from "../contexts/user";

const flexboxStyle = { display: "flex", alignItems: "center" };

const divStyleGeneral = {
  gridArea: "header",
  ...flexboxStyle,
  marginLeft: "25px",
  borderBottom: "1px solid #e8e8eb",
  height: "100%"
};

const h2Style = {
  marginLeft: "1.5em",
  "@media (min-width: 960px)": {
    marginLeft: "0"
  }
};

const divStyleOptions = {
  ...flexboxStyle,
  marginLeft: "auto"
};

const divStyleIcon = {
  ...flexboxStyle,
  padding: "0 .25em",
  fontSize: "1.5em"
};

const divStyleUserInfo = {
  display: "flex",
  flexDirection: "column",
  fontSize: "0.8em",
  justifyContent: "center",
  "@media (max-width: 500px)": { display: "none" }
};

function Header({ title }) {
  const currentUser = React.useContext(UserContext).data;

  return (
    <div css={divStyleGeneral}>
      <h2 css={h2Style}>{title}</h2>
      <div css={divStyleOptions}>
        <NavBarItem
          styles={{
            padding: "0 1em",
            height: 48,
            "&:hover": {
              cursor: "pointer",
              background: "#f24c36",
              color: "#FFF",
              fontWeight: "bold"
            }
          }}
          link="/daily-log"
        >
          <div css={divStyleIcon}>
            <FaClock />
          </div>
          <span css={{ marginLeft: "0.25em" }}>Log</span>
        </NavBarItem>
        <div css={{ display: "flex" }}>
          <div
            css={{
              ...divStyleIcon,
              "@media (max-width: 500px)": { display: "none" }
            }}
          >
            <FaUser />
          </div>
          <div css={divStyleUserInfo}>
            <span>{currentUser.name}</span>
            <span>{currentUser.role}</span>
          </div>
          <div css={{ ...divStyleIcon, fontSize: "15px" }}>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
