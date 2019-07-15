/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";
import { closedProjects } from "../services/project";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const red = { borderColor: "#f24636" };
const ambar = { borderColor: "#fec235" };
const green = { borderColor: "#52af50" };

function ClosedProjects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    closedProjects().then(list => setProjects(list));
  }, []);

  return (
    <main>
      <Section>
        {projects.map(project => {
          return (
            <Card styles={card} key={project.id} role="card">
              <span>{project.name}</span>
              <Circle>30%</Circle>
            </Card>
          );
        })}
      </Section>
    </main>
  );
}

export default ClosedProjects;
