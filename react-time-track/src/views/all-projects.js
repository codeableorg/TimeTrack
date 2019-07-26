/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Button, Subtitle } from "../components/ui";
import { Center } from "../components/helpers";
import ListProjects from "../components/list-projects";

function AllProjects() {
  function handleClick() {
    navigate("/create-project");
  }

  return (
    <div>
      <Subtitle>All Projects:</Subtitle>
      <ListProjects />
      <Center>
        <Button onClick={handleClick}>New Project</Button>
      </Center>
    </div>
  );
}

export default AllProjects;
