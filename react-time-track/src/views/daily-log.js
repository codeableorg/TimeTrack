/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Subtitle, Button } from "../components/ui";
import { getProjectMember } from "../services/project_member";
import { getUserProjects } from "../services/user";
import { createDailyLog } from "../services/daily_log";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month =
  currentDate.getMonth() + 1 < 10
    ? `0${currentDate.getMonth() + 1}`
    : currentDate.getMonth() + 1;
const day =
  currentDate.getDate() < 10
    ? `0${currentDate.getDate()}`
    : currentDate.getDate();
const calendarDate = `${year}-${month}-${day}`;

const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function DailyLog({ currentUser }) {
  const [selects, setSelects] = React.useState({});
  const [total, setTotal] = React.useState(0);
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    getUserProjects(currentUser.id).then(response => setProjects(response));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const selects = Array.from(event.target.elements);

    let dailyData = {};
    const projectMembers = [];
    for (let i = 0; i < projects.length; i++) {
      const projectMember = await getProjectMember(
        currentUser.id,
        projects[i].id
      );
      projectMembers.push(projectMember[0]);
    }

    for (let i = 0; i < projects.length; i++) {
      const hours = selects.find(e => e.name == projects[i].id).value;
      dailyData = {
        project_member_id: projectMembers[i].id,
        date: calendarDate,
        amount: Math.round((+hours / total) * currentUser.rate) || 0
      };
      await createDailyLog(dailyData);
    }
  }

  function handleSelectChange(event) {
    setSelects({
      ...selects,
      [event.target.name]: event.target.value
    });
  }

  React.useEffect(() => {
    setTotal(
      Object.values(selects).reduce((acum, current) => acum + +current, 0)
    );
  }, [selects]);
  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1em"
        }}
      >
        <label htmlFor="calendar">Chose a date</label>
        <input id="calendar" type="date" defaultValue={calendarDate} />
      </div>
      <Subtitle>My projects</Subtitle>
      <ul id="selectList" name="selectList">
        {projects.map(project => {
          return (
            <li
              key={project.id}
              css={{
                display: "flex",
                width: "300px",
                justifyContent: "space-between",
                margin: "0.5em 0",
                fontSize: "1.25em"
              }}
            >
              <span>{project.name}</span>
              <select
                name={project.id}
                onChange={handleSelectChange}
                css={{
                  font: "inherit",
                  width: "60px"
                }}
              >
                {hours.map(hour => (
                  <option key={`option${hour}`} value={hour}>
                    {hour} h
                  </option>
                ))}
              </select>
            </li>
          );
        })}
      </ul>
      <span>Total hours: {total}</span>
      <Button type="submit" styles={{ width: "50%", margin: "1em" }}>
        Submit
      </Button>
    </form>
  );
}

export default DailyLog;
