/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate, Link } from "@reach/router";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";
import { listProjects } from "../services/project";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const red = { borderColor: "#f24636" };
const ambar = { borderColor: "#fec235" };
const green = { borderColor: "#52af50" };

function calculateProgress(real, estimated) {
  return ((parseInt(real) / parseInt(estimated)) * 100).toFixed(0) + "%";
}

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
              <Circle>
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
