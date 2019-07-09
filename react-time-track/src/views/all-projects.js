/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button, Subtitle } from "../components/ui";
import ListProjects from "../components/list-projects";

const center = {
  display: "flex",
  justifyContent: "center"
};

function AllProjects() {
  return (
    <>
      <Subtitle>All Projects:</Subtitle>
      <ListProjects />
      <div css={center}>
        <Button>New Project</Button>
      </div>
    </>
  );
}

export default AllProjects;
