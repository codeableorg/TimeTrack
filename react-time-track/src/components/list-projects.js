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
  return (
    <main>
      <Section>
        <Card styles={card}>
          <div>Project Run</div>
          <Circle styles={red}>30%</Circle>
        </Card>
        <Card styles={card}>
          <div>Project Run</div>
          <Circle styles={ambar}>50%</Circle>
        </Card>
        <Card styles={card}>
          <div>Project Run</div>
          <Circle styles={green}>40%</Circle>
        </Card>
        <Card styles={card}>
          <div>Project Run</div>
          <Circle>40%</Circle>
        </Card>
      </Section>
    </main>
  );
}

export default ListProjects;
