/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Card, Circle } from "../components/ui";
import { Section } from "../components/helpers";
import { Subtitle } from "../components/ui";

const project = {
  id: 1,
  name: "Proyecto 1",
  client: "Graña y Montero",
  category: "Category 1",
  start_date: "2019-07-08",
  end_date: "2019-09-02",
  closed: false,
  estimated_cost: 772800,
  real_cost: 234000,
  members: [
    {
      id: 2,
      name: "Juan Manager",
      role: "Manager"
    },
    {
      id: 4,
      name: "Pepe Analyst",
      role: "Analyst"
    },
    {
      id: 6,
      name: "Carlos Analyst",
      role: "Analyst"
    },
    {
      id: 1,
      name: "Maria Owner",
      role: "Owner"
    }
  ]
};

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  minWidth: "45%",
  width: "auto"
};

function Project() {
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
          margin: "0 25px",
          width: "80%",
          height: "250px",
          background: "grey"
        }}
      >
        Line Graph
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
