/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Button, Subtitle } from "../components/ui";
import { Center } from "../components/helpers";
import ListProjects from "../components/list-projects";
import { useConsumer } from "../contexts/user";

function AllProjects() {
  const { user } = useConsumer();

  function handleClick() {
    navigate("/create-project");
  }

  return (
    <div>
      <Subtitle>All Projects:</Subtitle>
      <ListProjects />
      {user.role === "Owner" ? (
        <Center>
          <Button onClick={handleClick}>New Project</Button>
        </Center>
      ) : null}
    </div>
  );
}

export default AllProjects;
