/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { userList } from "../services/user";
import { Section } from "./helpers";
import { Card, Circle } from "./ui";
import {getProjectUser} from "../services/user";

const userNameStyle = {
  width: "70%",
  background: "white",
  margin: "10% 15%",
  borderRadius: "0.5em",
  padding: "2rem 1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};

function MemberStatus() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    userList().then(list => setUsers(list));
  }, []);

  const userName = users.map(user => {
    return user.name;
  });
  console.log(userName, "hi",userName[1]);
  return (
    <main>
      <Section>
        <div css={{width:"100%"}}>
          <Card css={userNameStyle}>{userName[0]}</Card>
        </div>
        <div css={{width:"100%"}}>
          <Card css={userNameStyle}>project1<Circle></Circle></Card>
          
        </div>
      </Section>
    </main>
  );
}

export default MemberStatus;
