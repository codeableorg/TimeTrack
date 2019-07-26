/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { Li, Title, UserCard,Card, Button } from "../components/ui";
import { userList } from "../services/user";

function Users() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
   userList()
   .then(data => { setUser(data);
   });  
 }, []);

    return (
    <div
      css={{
        maxWidth: "500px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
            <Title htmlFor="name">List of Users</Title>

            <ol css={{
                  color: "#ccc",
                  listStyleType: "none",
                  width: "80%",
                  padding:"0"
                }}> 
        {user.map(usr => {
          return (    
                  <li css={{
                    position: "relative",
                    font: "bold italic 45px/1.5 Helvetica, Verdana, sans-serif",
                    marginBottom: "20px"
                  }}>
                  <Card css={{"p": {padding: "0"}}}>
                    <Li>Name: {usr.name}</Li>
                    <Li>Role: {usr.role}</Li>  
                    </Card>                                                              
                  </li>                            
          );
        })}
        </ol>
        <div css={{ marginTop: "2em", width: "80%" }}>
            <Button>NEW USER</Button>
          </div>
    </div>
  );
}

export default Users;