/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Subtitle } from "../components/ui";
import ListUserProjects from "../components/list-user-projects";

function MyStatus() {
  return (
    <div>
      <Subtitle>My Projects:</Subtitle>
      <ListUserProjects />
    </div>
  );
}

export default MyStatus;
