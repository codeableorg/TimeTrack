/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
// import { navigate } from "@reach/router";
import { Li, LittleCard, Title, UserCard, Button } from "../components/ui";
import { userList } from "../services/user";

function Users() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
   userList()
   .then(data => { setUser(data);
   });  
 }, []);

// {console.log(user)};

    return (
    <UserCard
      css={{
        maxWidth: "500px",
        margin: "auto"
      }}
    >
            <Title htmlFor="name">List of Users</Title>

            
        {user.map(usr => {
          return (
            <>
              {/* <LittleCard css={{ marginTop: "2em" }}> */}
                <ol css={{
                  color: "#ccc",
                  listStyleType: "none"
                }}>
                  <li css={{
                    position: "relative",
                    font: "bold italic 45px/1.5 Helvetica, Verdana, sans-serif",
                    marginBottom: "20px"
                  }}>
                
                {/* keysSorted = Object.values(usr).sort(function(a,b){user.id[a]-user.id[b]})
                console.log(keysSorted); */}
                {console.log(usr["id"])}
                {/* {console.log(Object.values(usr))} */}

                  <span css={{position: "absolute"}}>
                    {usr.id}.
                  </span>
                    <Li>Name: {usr.name}</Li>
                    <Li>Email: {usr.email}</Li>                                 
                    <Li>Role: {usr.role}</Li>                                  
                    <Li>Rate: {usr.rate}.00 USD</Li> 
                  </li>
                </ol>
              {/* </LittleCard>           */}
            </>
          );
        })}
        <div css={{ marginTop: "2em" }}>
            <Button>CREATE USER</Button>
          </div>
    </UserCard>
  );
}

export default Users;
