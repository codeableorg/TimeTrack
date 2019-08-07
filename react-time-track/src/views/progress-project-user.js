/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Card, IconUser } from "../components/ui";
import { getUserReport } from "../services/user_report";
import progressChart from "../utils/progress-chart";

const card = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  width: "75%",
  "@media (max-width: 350px)": {
    width: "100%",
    height: 400
  }
};

function ProgressProjectByUser({ project_id, member_id }) {
  const [user, setUser] = React.useState({ members: [] });
  const [title, setTitle] = React.useState("");
  const [weeklyData, setWeeklyData] = React.useState({ details: [] });

  React.useEffect(() => {
    if (!sessionStorage.getItem("ProjectMember"))
      navigate(`/projects/${project_id}`);
    else {
      const data = JSON.parse(sessionStorage.getItem("ProjectMember"));
      if (!member_id) member_id = data.id;
      setUser(data);
      setTitle(sessionStorage.getItem("ProjectTitle").toString());
      sessionStorage.removeItem("ProjectMember");
      sessionStorage.removeItem("ProjectTitle");
    }
  }, []);

  React.useEffect(() => {
    getUserReport(project_id, member_id)
      .then(response => setWeeklyData(response))
      .catch(error => console.log(error));
  }, []);

  React.useEffect(() => {
    let acumEstimated = 0;
    let acumReal = 0;

    const weeksLabels = weeklyData.details.map(week_data => week_data.week);
    const estimated_cost = weeklyData.details.map(week_data => {
      acumEstimated += week_data.estimated_cost;
      return (acumEstimated / weeklyData.estimated_cost) * 100;
    });
    const real_cost = weeklyData.details.map(week_data => {
      acumReal += week_data.real_cost;
      return (acumReal / weeklyData.estimated_cost) * 100;
    });

    const myChart = progressChart("myChart", weeksLabels, {
      graphic_estimated: estimated_cost,
      graphic_real: real_cost,
      title: title
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
            maxWidth: "95%",
            position: "relative"
          }}
        >
          <canvas id="myChart" width="400" height="400" />
        </div>
      </Card>
    </div>
  );
}

export default ProgressProjectByUser;
