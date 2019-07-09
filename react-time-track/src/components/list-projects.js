/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Card, Circle } from "../components/ui";

const section = {
  display: "flex",
  flexWrap: "wrap",
  margin: "0 25px",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
    margin: "0"
  }
};

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const name = {
  width: "80%"
};

function ListProjects() {
  return (
    <main>
      <section css={section}>
        <Card styles={card}>
          <div css={name}>Project Run</div>
          <Circle>30%</Circle>
        </Card>
      </section>
    </main>
  );
}

export default ListProjects;
