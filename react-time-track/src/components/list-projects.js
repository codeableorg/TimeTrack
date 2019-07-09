/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Card } from "../components/ui";

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

function ListProjects() {
  return (
    <main>
      <section css={section}>
        <Card>Project Run</Card>
        <Card>Project Crib</Card>
        <Card>Project Codeable</Card>
        <Card>Project Qumi</Card>
        <Card>Project Quchi</Card>
        <Card>Project Run</Card>
        <Card>Project Crib</Card>
        <Card>Project Codeable</Card>
        <Card>Project Qumi</Card>
        <Card>Project Quchi</Card>
        <Card>Project Run</Card>
        <Card>Project Crib</Card>
        <Card>Project Codeable</Card>
        <Card>Project Qumi</Card>
        <Card>Project Quchi</Card>
        <Card>Project Run</Card>
        <Card>Project Crib</Card>
        <Card>Project Codeable</Card>
        <Card>Project Qumi</Card>
        <Card>Project Quchi</Card>
      </section>
    </main>
  );
}

export default ListProjects;
