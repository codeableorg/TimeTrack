/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Button, Card, Circle } from "./ui";
import { Section } from "./helpers";
import { userList } from "../services/user";

const userStyle = {
  width: "70%",
  margin: "1% 15% ",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const card = {
  background: "white",
  borderRadius: ".5em",
  boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
  boxSizing: "border-box",
  padding: "0.2rem 1rem",
  width: "100%",
  margin: "1% 0%",
  "@media (max-width: 768px)": {
    width: "90%",
    margin: "1% 5%"
  }
};

const circle = {
  marginRight: "2%",
  width: "3em",
  height: "3em",
  border: "5px solid green",
  "@media (max-width: 768px)": {
    fontSize: "14px"
  }
};

const eachUser = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "0.2rem 1rem",
  width: "100%",
  margin: "1.2rem auto"
};

const nameStyle = {
  width: "85%"
};

const roleStyle = {
  color: "gray",
  fontSize: "18px"
};

const button = {
  margin: "1% auto",
  width: "70%",
  borderRadius: "10px"
};

const eachNameStyle = {
  cursor: "Pointer",
  "&:hover": {
    cursor: "pointer",
    fontWeight: "bold"
  }
};

function UserList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    userList().then(list => setUsers(list));
  }, []);

  let members = users.reduce((objUsers, user) => {
    let list = objUsers[user.name[0]];
    if (!list) list = [];
    list.push(user.name);
    return {
      ...objUsers,
      [user.name[0]]: list
    };
  }, {});

  const roles = users.map(user => {
    return user.role;
  });
  let count = -1;

  const firstLetter = Object.keys(members);

  return (
    <main>
      <Section>
        {firstLetter.map(user => {
          return (
            <div css={userStyle} key={user}>
              <h2>{user}</h2>
              <Card styles={card} role="listuser">
                {members[user].map(name => {
                  count++;
                  return (
                    <div css={eachUser} key={name}>
                      <div css={nameStyle}>
                        <div css={eachNameStyle}>{name}</div>
                        <div css={roleStyle}>{roles[count]}</div>
                      </div>
                    </div>
                  );
                })}
              </Card>
            </div>
          );
        })}
        <Button css={button}>New User</Button>
      </Section>
    </main>
  );
}

export default UserList;
