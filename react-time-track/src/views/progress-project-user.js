/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Chart from "chart.js";

import { Card, IconUser } from "../components/ui";
import { getProjectDetail } from "../services/project";
import { getUser } from "../services/user";
import { getWeeklyReport } from "../services/weekly_report";
import { UserContext } from "../contexts/user";

const card = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  width: "75%"
};

function ProgressProjectByUser({ project_id, user_id }) {
  const logged = React.useContext(UserContext);

  const [user, setUser] = React.useState({ members: [] });
  const [project, setProject] = React.useState({ members: [] });
  const [weeklyData, setWeeklyData] = React.useState([]);

  React.useEffect(() => {
    getProjectDetail(project_id)
      .then(response => {
        setProject(response);
        return getUser(user_id);
      })
      .then(response => setUser(response))
      .catch(response => {
        if (response.message === "Access denied") logged.onLogout();
      });
  }, []);

  React.useEffect(() => {
    if (project.members.length === 0) return;
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
        legend: {
          position: "bottom"
        },
        responsive: true,
        title: {
          display: true,
          text: project.name,
          fontSize: 30,
          fontColor: "black"
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
      <Card styles={card}>
        <div
          css={{
            display: "flex",
            width: "100%"
          }}
        >
          <IconUser styles={{ width: 64, height: 64, fontSize: "2em" }} />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              marginLeft: "0.5em"
            }}
          >
            <span>{user.name}</span>
            <span css={{ fontSize: "0.8em", fontWeight: "bold" }}>
              {user.role}
            </span>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "90%"
          }}
        >
          <canvas id="myChart" width="400" height="400" />
        </div>
      </Card>
    </div>
  );
}

export default ProgressProjectByUser;
