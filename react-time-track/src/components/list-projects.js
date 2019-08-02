/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";
import { listProjects } from "../services/project";

import calculateProgress from "../utils/calculateProgress";
import calculateRisk from "../utils/calculateRisk";
import { UserContext } from "../contexts/user";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

function ListProjects() {
  const [projects, setProjects] = React.useState([]);
  const logged = React.useContext(UserContext);

  React.useEffect(() => {
    listProjects()
      .then(list => setProjects(list))
      .catch(response => logged.onLogout());
  }, []);

  // console.log("Projects:", projects);

  return (
    <main>
      <Section role="list">
        {projects.map(project => {
          return (
            <Card styles={card} key={project.id} role="listitem">
              <Link to={`/projects/${project.id}`}>
                <span>{project.name}</span>
              </Link>
              <Circle styles={calculateRisk(project.weekly)}>
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
