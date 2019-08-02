/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { FaSignOutAlt } from "react-icons/fa";

import { UserContext } from "../contexts/user";

function LogOut() {
  const logged = React.useContext(UserContext);

  function handleLogOut() {
    logged.onLogout();
  }

  return (
    <div
      role="button"
      aria-label="log out session"
      css={{
        height: "2rem",
        fontSize: "2em",
        padding: "0.5rem",
        border: "none",
        cursor: "pointer"
      }}
      onClick={handleLogOut}
    >
      <FaSignOutAlt />
    </div>
  );
}

export default LogOut;
