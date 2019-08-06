/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { FaTimes, FaUser } from "react-icons/fa";

import { UserContext } from "../contexts/user";
import { NavBarItem } from "../components/ui";

const divStyleIcon = {
  display: "none",
  alignItems: "center",
  padding: "0 .25em"
};

function NavBar({ navBarActive, togleNavBar }) {
  const currentUser = React.useContext(UserContext).data;

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

  const linksByRole = {
    Owner: [
      { name: "My Status", link: "/mystatus" },
      { name: "Projects", link: "/" },
      { name: "Members", link: "/members" },
      { name: "History", link: "/history" },
      { name: "User Settings", link: "/users" }
    ],
    Manager: [
      { name: "My Status", link: "/mystatus" },
      { name: "Projects", link: "/" },
      { name: "Members", link: "/members" },
      { name: "History", link: "/history" }
    ],
    Analyst: [{ name: "My Status", link: "/" }]
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
      <div
        css={{
          ...divStyleIcon,
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
          padding: "0.5em 0",
          "@media (max-width: 500px)": { display: "flex" }
        }}
      >
        <div
          css={{
            ...divStyleIcon,
            fontSize: "1.5em",
            "@media (max-width: 500px)": { display: "flex" }
          }}
        >
          <FaUser />
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "0.25em",
            fontSize: "15px"
          }}
        >
          <span>{currentUser.name}</span>
          <span>{currentUser.role}</span>
        </div>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {linksByRole[currentUser.role].map(link => {
          return (
            <NavBarItem link={link.link} onClick={togleNavBar} key={link.name}>
              {link.name}
            </NavBarItem>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
