/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Subtitle, Button } from "../components/ui";
import { listUserProjects } from "../services/project";
import { createDailyLog } from "../services/daily_log";
import { UserContext } from "../contexts/user";
import { useAlert } from "react-alert";

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

function DailyLog() {
  const alert = useAlert();
  const logged = React.useContext(UserContext);
  const currentUser = logged.data;

  const [selects, setSelects] = React.useState({});
  const [total, setTotal] = React.useState(0);
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    listUserProjects()
      .then(response => setProjects(response))
      .catch(response => {
        console.log(response.message);
        if (response.message === "Access denied") logged.onLogout();
        else alert.error(response.message);
      });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    let dailyData = [];

    projects.forEach(project => {
      const hours = selects[project.id];
      const data = {
        project_id: project.id,
        user_id: currentUser.id,
        date: calendarDate,
        amount: Math.round((+hours / total) * currentUser.rate) || 0
      };
      dailyData.push(data);
    });

    createDailyLog({ data: dailyData })
      .then(response => {
        alert.success(`Daily Log saved`);
      })
      .catch(response => {
        alert.error(response.message);
      });
    setSelects({});
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
        <label htmlFor="calendar">Choose a date</label>
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
