/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { IconUser } from "../components/ui";
import ListUserProjects from "../components/list-user-projects";

const card = {
  display: "flex",
  margin: "0 25px",
  width: "100%",
  marginBottom: "2em",
  "@media (max-width:768px)": {
    width: "90%"
  }
};

function ProjectsByUser({ user_id }) {
  const [user, setUser] = React.useState({ name: "", role: "" });

  React.useEffect(() => {
    if (!sessionStorage.getItem("ProjectMember")) navigate("/members");
    else {
      setUser(JSON.parse(sessionStorage.getItem("ProjectMember")));
      sessionStorage.removeItem("ProjectMember");
    }
  }, []);

  return (
    <>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <div css={card}>
          <IconUser styles={{ width: 64, height: 64, fontSize: "2em" }} />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: ".5em",
              fontSize: "1.5em"
            }}
          >
            <span>{user.name}</span>
            <span css={{ fontSize: "1em", fontWeight: "bold" }}>
              {user.role}
            </span>
          </div>
        </div>
      </div>
      <ListUserProjects userId={user_id} />
    </>
  );
}

export default ProjectsByUser;
