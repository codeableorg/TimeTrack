import React from "react";
import { Subtitle } from "../components/ui";

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

const projects = [
  { name: "Proyecto 1", id: "p1" },
  { name: "Proyecto 2", id: "p2" },
  { name: "Proyecto 3", id: "p3" }
];

const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function DailyLog() {
  const [selects, setSelects] = React.useState({});
  const [total, setTotal] = React.useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="calendar">Chose a date</label>
        <input
          id="calendar"
          type="date"
          defaultValue={`${year}-${month}-${day}`}
        />
      </div>
      <Subtitle>My projects</Subtitle>
      <ul>
        {projects.map(project => {
          return (
            <li key={project.id}>
              <span>{project.name}</span>
              <select name={project.id} onChange={handleSelectChange}>
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
      <button type="submit">Submit</button>
      <span>Total {total}</span>
    </form>
  );
}

export default DailyLog;
