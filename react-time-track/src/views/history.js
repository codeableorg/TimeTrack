import React from "react";

import { Subtitle } from "../components/ui";
import ClosedProjects from "../components/closed-projects";

function History() {
  return (
    <>
      <Subtitle>Closed Projects:</Subtitle>
      <ClosedProjects />
    </>
  );
}

export default History;
