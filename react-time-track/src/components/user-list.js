/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { Card } from "./ui";
import { Section } from "./helpers";
import { userList } from "../services/user";
import { UserContext } from "../contexts/user";

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
  fontSize: "14px"
};

const eachNameStyle = {
  cursor: "Pointer",
  "@media (max-width: 768px)": {
    fontSize: "18px"
  },
  "&:hover": {
    cursor: "pointer",
    fontWeight: "bold"
  }
};

function UserList() {
  const logged = React.useContext(UserContext);
  const [users, setUsers] = React.useState([]);

  function handleClick(user) {
    sessionStorage.setItem("ProjectMember", JSON.stringify(user));
  }

  React.useEffect(() => {
    userList()
      .then(list => setUsers(list))
      .catch(response => {
        if (response.message === "Access denied") logged.onLogout();
      });
  }, []);

  let members = users.reduce((objUsers, user) => {
    let list = objUsers[user.name[0]];
    if (!list) list = [];
    list.push(user);
    return {
      ...objUsers,
      [user.name[0]]: list
    };
  }, {});

  const firstLetter = Object.keys(members).sort();

  return (
    <main>
      <Section>
        {firstLetter.map(user => {
          return (
            <div css={userStyle} key={user}>
              <h2>{user}</h2>
              <Card styles={card} role="contentinfo">
                {members[user].map(objUser => {
                  return (
                    <Link
                      to={`/members/${objUser.id}`}
                      onClick={() => handleClick(objUser)}
                      key={objUser.id}
                    >
                      <div css={eachUser}>
                        <div css={nameStyle}>
                          <div css={eachNameStyle}>{objUser.name}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Card>
            </div>
          );
        })}
      </Section>
    </main>
  );
}

export default UserList;
