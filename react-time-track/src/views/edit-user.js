/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { Li, Title, UserCard,Card, Button } from "../components/ui";
import { getUser } from "../services/user";

function EditUser() {
  const [editUser, setEditUser] = React.useState([]);

  React.useEffect(() => {
   getUser()
   .then(data => { setEditUser(data);
   });  
 }, []);

  React.useEffect(() => {
    console.log(editUser);
  }, [editUser]);

    

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
            <Title htmlFor="name">{editUser.name}</Title>
            <p>{editUser.email}</p>            
        <div css={{ marginTop: "2em", width: "80%" }}>
            <Button>SAVE CHANGES</Button>
        </div>
    </div>
  );
}

export default EditUser;
