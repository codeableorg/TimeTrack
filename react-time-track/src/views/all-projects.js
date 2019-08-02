/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Button, Subtitle } from "../components/ui";
import { Center } from "../components/helpers";
import ListProjects from "../components/list-projects";
import { UserContext } from "../contexts/user";

function AllProjects() {
  const currentUser = React.useContext(UserContext).data;

  function handleClick() {
    navigate("/create-project");
  }

  return (
    <div>
      <Subtitle>All Projects:</Subtitle>
      <ListProjects />
      {currentUser.role === "Owner" ? (
        <Center>
          <Button onClick={handleClick}>New Project</Button>
        </Center>
      ) : null}
    </div>
  );
}

export default AllProjects;
