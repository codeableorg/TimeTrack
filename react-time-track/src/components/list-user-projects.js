/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate, Link } from "@reach/router";

import { Card, Circle } from "./ui";
import { Section } from "./helpers";
import { listUserProjects } from "../services/project";

import calculateProgress from "../utils/calculateProgress";
import calculateRisk from "../utils/calculateRisk";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

function ListUserProjects() {
  const [userProjects, setUserProjects] = React.useState([]);

  React.useEffect(() => {
    listUserProjects()
      .then(list => setUserProjects(list))
      .catch(response => navigate("/login"));
  }, []);

  React.useEffect(() => {
    console.log(userProjects);
  }, [userProjects]);

  return (
    <main>
      <Section role="list">
        {userProjects.map(project => {
          return (
            <Card styles={card} key={project.id} role="listitem">
              <Link to="#">
                <span>{project.name}</span>
              </Link>
              <Circle styles={calculateRisk(project.weekly)}>
                {calculateProgress(
                  project.user_detail[0].real_cost,
                  project.user_detail[0].estimated_cost
                )}
              </Circle>
            </Card>
          );
        })}
      </Section>
    </main>
  );
}

export default ListUserProjects;
