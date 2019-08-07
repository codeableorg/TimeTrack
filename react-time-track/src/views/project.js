/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link, navigate } from "@reach/router";

import { Card, Circle, Subtitle, Button } from "../components/ui";
import CloseProjectModal from "../components/close-project-modal";
import { getProjectDetail, closeProject } from "../services/project";
import { getWeeklyReport } from "../services/weekly_report";
import progressChart from "../utils/progress-chart";
import { UserContext } from "../contexts/user";

import calculateProgress from "../utils/calculateProgress";
import calculateStatus from "../utils/calculateStatus";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  minWidth: "45%",
  width: "auto"
};

function Project({ project_id }) {
  const logged = React.useContext(UserContext);
  const [project, setProject] = React.useState({ members: [] });
  const [weeklyData, setWeeklyData] = React.useState([]);

  const [isOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function onCloseProject() {
    closeProject(project_id)
      .then(response => {
        toggleModal();
        navigate("/history");
      })
      .catch(response => {
        console.log(response);
        if (response.message === "Access denied") logged.onLogout();
      });
  }

  function handleClick(user) {
    sessionStorage.setItem("ProjectMember", JSON.stringify(user));
    sessionStorage.setItem("ProjectTitle", project.name);
  }

  React.useEffect(() => {
    getProjectDetail(project_id)
      .then(response => setProject(response))
      .catch(response => {
        console.log(response);
        if (response.message === "Access denied") logged.onLogout();
      });
  }, []);

  React.useEffect(() => {
    if (project.members.length === 0) return;
    getWeeklyReport(project_id)
      .then(response => setWeeklyData(response))
      .catch(response => {
        console.log(response);
        if (response.message === "Access denied") logged.onLogout();
      });
  }, [project]);

  React.useEffect(() => {
    let acumEstimated = 0;
    let acumReal = 0;
    const weeksLabels = weeklyData.map(week_data => week_data.week);
    const estimated_cost = weeklyData.map(week_data => {
      acumEstimated += week_data.estimated_cost;
      return (acumEstimated / project.estimated_cost) * 100;
    });

    const real_cost = weeklyData.map(week_data => {
      acumReal += week_data.real_cost;
      return (acumReal / project.estimated_cost) * 100;
    });

    const myChart = progressChart("myChart", weeksLabels, {
      graphic_estimated: estimated_cost,
      graphic_real: real_cost,
      title: project.name
    });
  }, [weeklyData]);

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "90%"
        }}
      >
        <canvas id="myChart" width="400" height="400" />
      </div>
      <Subtitle styles={{ alignSelf: "flex-start" }}>Team Members</Subtitle>
      <div
        css={{
          display: "flex",
          width: "80%",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {project.members.map(member => {
          return (
            <Card styles={card} key={member.id}>
              <Link
                css={{
                  display: "flex",
                  width: "100%"
                }}
                to={`/projects/${project_id}/members/${member.id}`}
                onClick={() => handleClick(member)}
              >
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%"
                  }}
                >
                  <span>{member.name}</span>
                  <span css={{ fontSize: "0.8em" }}>{member.role}</span>
                </div>
                <Circle
                  styles={calculateStatus(
                    project.start_date,
                    project.end_date,
                    member.real_cost,
                    member.estimated_cost
                  )}
                >
                  {calculateProgress(member.real_cost, member.estimated_cost)}
                </Circle>
              </Link>
            </Card>
            //
          );
        })}
      </div>
      <Button onClick={toggleModal}>Close Project</Button>
      <CloseProjectModal
        toggleModal={toggleModal}
        isOpen={isOpen}
        onCloseProject={onCloseProject}
      />
    </div>
  );
}

export default Project;
