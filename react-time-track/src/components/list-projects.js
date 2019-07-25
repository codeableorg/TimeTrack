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

function calculateRisk(project) {
  let riskValue = [];
  const projectDays =
    (Date.parse(project.end_date) + 1 - Date.parse(project.start_date)) /
    (1000 * 60 * 60 * 24); // calculate duration of the project

  const usedDays =
    (Date.now() - Date.parse(project.start_date)) / (1000 * 60 * 60 * 24); // calculate used days

  const currentEstimatedCost =
    (project.estimated_cost * usedDays) / projectDays;

  const currentRealCost = project.real_cost;

  console.log(
    `Días totales del proyecto id ${project.id}: ${Math.abs(
      Math.round(projectDays)
    )}, inicio: ${project.start_date} final: ${project.end_date}`
  ); // show available days of project, start and end date

  console.log(
    `Días usados ${project.id}: ${Math.abs(Math.round(usedDays))}, inicio: ${
      project.start_date
    } actual: ${new Date()}`
  ); // show used days of project, start and current date

  console.log(
    `Proyecto: ${project.id}: 
    Costo estimado proyecto: ${project.estimated_cost}, 
    Costo real proyecto: ${project.real_cost}, 
    costo estimado actual: ${currentEstimatedCost}; 
    costo real actual: ${currentRealCost},
    estado: ${currentRealCost / currentEstimatedCost}`
  );

  if (currentRealCost / currentEstimatedCost > 1) riskValue = red;
  else if (
    currentRealCost / currentEstimatedCost < 1 &&
    currentRealCost / currentEstimatedCost > 0.9
  )
    riskValue = ambar;
  else if (currentRealCost / currentEstimatedCost < 0.9) riskValue = green;
  // console.log("Estilos circulo: ", riskValue);
  return riskValue;
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
                {/* {console.log("project data: ", project)} */}
                <span>{project.name}</span>
              </Link>
              <Circle styles={calculateRisk(project)}>
                {/* <Circle styles={red}> */}
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
