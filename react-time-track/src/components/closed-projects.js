/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";
import { closedProjects } from "../services/project";

import calculateStatus from "../utils/calculateStatus";
import calculateProgress from "../utils/calculateProgress";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

// const red = { borderColor: "#f24636" };
// const ambar = { borderColor: "#fec235" };
// const green = { borderColor: "#52af50" };

function ClosedProjects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    closedProjects()
      .then(list => setProjects(list))
      .catch(response => navigate("/login"));
  }, []);

  return (
    <main>
      <Section role="list">
        {projects.map(project => {
          return (
            <Card styles={card} key={project.id} role="listitem">
              <span>{project.name}</span>
              <Circle
                styles={calculateStatus(
                  project.start_date,
                  project.end_date,
                  project.real_cost,
                  project.estimated_cost
                )}
              >
                {calculateProgress(project.real_cost, project.estimated_cost)}
              </Circle>
            </Card>
          );
        })}
      </Section>
    </main>
  );
}

export default ClosedProjects;
