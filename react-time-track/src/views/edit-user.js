/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { Li, Title, UserCard,Card, Button } from "../components/ui";
import { getUser } from "../services/user";

function EditUser({user_id}) {
  const [editUser, setEditUser] = React.useState({
    name: "",
    email: "",
    role: "",
    rate: 0
});

  React.useEffect(() => {
   console.log(user_id)
   getUser(user_id)
   .then(data => { setEditUser(data);
   });  
 }, []);

  React.useEffect(() => {
    console.log(editUser);
  }, [editUser]);

  function handleChange(e, key) {
    setEditUser({...editUser, [key] : e.target.value })
   }

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
        <form css={{ marginTop: "5em", display: "flex", flexDirection: "column", width: "50%", fontSize: "20px"}}>
            Name: <input type="text" name="user-name" onChange={(event)=> handleChange(event,"name")} value={editUser.name} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>
            Email: <input type="text" name="user-email" onChange={(event)=> handleChange(event,"email")} value={editUser.email} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>
            Role: <input type="text" name="user-role" onChange={(event)=> handleChange(event,"role")} value={editUser.role} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>
            Rate: <input type="text" name="user-rate" onChange={(event)=> handleChange(event,"rate")} value={editUser.rate} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>                              
						<div css={{ marginTop: "1em", display: "flex", textAlign: "center"}}>
            	<Button>SAVE CHANGES</Button>
            </div>
        </form>
    </div>
  );
}

export default EditUser;
