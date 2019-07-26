/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate, Link } from "@reach/router";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";
import { listProjects } from "../services/project";
import calculateProgress from "../utils/calculateProgress";
import calculateRisk from "../utils/calculateRisk";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

function ListProjects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    listProjects()
      .then(list => setProjects(list))
      .catch(response => navigate("/login"));
  }, []);

  return (
    <main>
      <Section role="list">
        {projects.map(project => {
          return (
            <Card styles={card} key={project.id} role="listitem">
              <Link to={`/projects/${project.id}`}>
                <span>{project.name}</span>
              </Link>
              <Circle
                styles={calculateRisk(
                  project.start_date,
                  project.end_date,
                  project.estimated_cost,
                  project.real_cost
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

export default ListProjects;
