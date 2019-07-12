/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button, Subtitle } from "../components/ui";
import { Center } from "../components/helpers";
import ListProjects from "../components/list-projects";
import NavBar from "../components/navbar";

function AllProjects() {
  return (
    <>
      <NavBar />
      <Subtitle>All Projects:</Subtitle>
      <ListProjects />
      <Center>
        <Button>New Project</Button>
      </Center>
    </>
  );
}

export default AllProjects;
