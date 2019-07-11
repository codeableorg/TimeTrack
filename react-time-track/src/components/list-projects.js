/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&:firstChild": {
    width: "80%"
  }
};

const red = { borderColor: "#f24636" };
const ambar = { borderColor: "#fec235" };
const green = { borderColor: "#52af50" };

function ListProjects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    async function listProjects() {
      const list = await fetch("http://localhost:3000/api/projects", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json());
      setProjects(list);
    }
    listProjects();
  }, []);

  return (
    <main>
      <Section>
        {projects.map(project => {
          return (
            <Card styles={card} key={project.id}>
              <div>{project.name}</div>
              <Circle>30%</Circle>
            </Card>
          );
        })}
      </Section>
    </main>
  );
}

export default ListProjects;
