/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { Title, Card, Button, IconUser } from "../components/ui";
import { userList } from "../services/user";
import { UserContext } from "../contexts/user";

const divStyleGeneral = {
  maxWidth: "500px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const olStyle = {
  listStyleType: "none",
  width: "90%",
  padding: "0"
};

const liStyle = {
  position: "relative",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center"
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  width: "100%"
};

const cardStyleEnable = { ...cardStyle, border: ".25rem solid green" };
const cardStyleDisable = { ...cardStyle, border: ".25rem solid #b71717" };

const divStyleRow = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "0.5em"
};

const divStyleInfoRow = { ...divStyleRow, width: "100%" };
const divStyleButtonRow = { ...divStyleRow, width: 135 };

const buttonStyle = {
  width: 100,
  padding: 0,
  height: "30px",
  margin: ".1em"
};

const buttonStyleEnable = { ...buttonStyle, backgroundColor: "green" };
const buttonStyleDisable = { ...buttonStyle, backgroundColor: "#b71717" };

function Users() {
  const [users, setUser] = React.useState([]);
  const logged = React.useContext(UserContext);

  React.useEffect(() => {
    userList()
      .then(data => {
        data.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        setUser(data);
      })
      .catch(response => {
        if (response.message === "Access denied") logged.onLogout();
      });
  }, []);

  return (
    <div css={divStyleGeneral}>
      <Title htmlFor="name">List of Users</Title>
      <ol css={olStyle}>
        {users.map(user => {
          return (
            <li css={liStyle} key={user.id}>
              <Card styles={user.isActive ? cardStyleEnable : cardStyleDisable}>
                <div
                  css={{
                    display: "flex",
                    width: "100%"
                  }}
                >
                  <IconUser
                    styles={{
                      minWidth: 64,
                      height: 64,
                      fontSize: "2em",
                      alignSelf: "center"
                    }}
                  />
                  <div css={divStyleInfoRow}>
                    <span>{user.name}</span>
                    <span css={{ fontSize: "0.8em", fontWeight: "bold" }}>
                      {user.role}
                    </span>
                  </div>
                  <div css={divStyleButtonRow}>
                    <Link to={`/users/${user.id}`}>
                      <Button type="button" css={buttonStyle}>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      type="button"
                      css={
                        user.isActive ? buttonStyleDisable : buttonStyleEnable
                      }
                    >
                      {user.isActive ? "Disable" : "Enable"}
                    </Button>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
      <div css={{ marginTop: "2em", width: "80%" }}>
        <Link to="/users/new">
          <Button>New User</Button>
        </Link>
      </div>
    </div>
  );
}

export default Users;
