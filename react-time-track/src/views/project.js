/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Chart from "chart.js";
import { Card, Circle } from "../components/ui";
import { Subtitle } from "../components/ui";
import { getProjectDetail } from "../services/project";
import { getWeeklyReport } from "../services/weekly_report";
import { navigate } from "@reach/router";

// const weeklyData = [
//   {
//     id: 1,
//     project_id: 1,
//     week: "28",
//     estimated_cost: 96600,
//     real_cost: 117000
//   },
//   {
//     id: 2,
//     project_id: 1,
//     week: "29",
//     estimated_cost: 96600,
//     real_cost: 117000
//   }
// ];

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  minWidth: "45%",
  width: "auto"
};

function Project({ project_id }) {
  const [project, setProject] = React.useState({ members: [] });
  const [weeklyData, setWeeklyData] = React.useState([]);

  React.useEffect(() => {
    getProjectDetail(project_id)
      .then(response => setProject(response))
      .catch(error => console.log(error));
  }, []);

  React.useEffect(() => {
    if (project.members.length == 0) return;
    getWeeklyReport(project_id)
      .then(response => setWeeklyData(response))
      .catch(error => console.log(error));
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
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: weeksLabels,
        datasets: [
          {
            label: "Estimated Cost",
            data: estimated_cost,
            backgroundColor: "red",
            borderColor: "red",
            fill: false
          },
          {
            label: "Real Cost",
            data: real_cost,
            backgroundColor: "blue",
            borderColor: "blue",
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: project.name
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Week"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "%Consume budget"
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100
              }
            }
          ]
        }
      }
    });
  });

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
              <Circle>30%</Circle>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
