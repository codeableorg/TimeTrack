/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate, Link } from "@reach/router";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";
import { listProjects } from "../services/project";

// import { listWeeklyReport } from "../services/weekly_report";
import calculateProgress from "../utils/calculateProgress";
// import calculateRisk from "../utils/calculateRisk";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

function ListProjects() {
  const [projects, setProjects] = React.useState([]);
  // const [weeklyData, setWeeklyData] = React.useState([]);
  // const [groupWeeklyData, setGroupWeeklyData] = React.useState([]);

  React.useEffect(() => {
    listProjects()
      .then(list => setProjects(list))
      .catch(response => navigate("/login"));
  }, []);

  // React.useEffect(() => {
  //   listWeeklyReport()
  //     .then(response => setWeeklyData(response))
  //     .catch(error => console.log(error));
  // }, []);

  // React.useEffect(() => {
  //   const projectsCosts = weeklyData.reduce((accum, data) => {
  //     if (!accum[data.project_id]) {
  //       accum[data.project_id] = {
  //         estimated_cost: data.estimated_cost,
  //         real_cost: data.real_cost
  //       };
  //       return accum;
  //     }
  //     accum[data.project_id].estimated_cost += data.estimated_cost;
  //     accum[data.project_id].real_cost += data.real_cost;
  //     return accum;
  //   }, {});
  //   setGroupWeeklyData(projectsCosts);
  // }, [weeklyData]);
  console.log("Projects:", projects);
  // console.log("WeeklyData: ", weeklyData);
  // console.log("Costos projecto: ", groupWeeklyData);

  return (
    <main>
      <Section role="list">
        {projects.map(project => {
          return (
            <Card styles={card} key={project.id} role="listitem">
              <Link to={`/projects/${project.id}`}>
                <span>{project.name}</span>
              </Link>
              {/* <Circle styles={calculateRisk(project.estimated_cost, weeklyData[project.id].estimated_cost, weeklyData[project.id].real_cost)}> */}
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
