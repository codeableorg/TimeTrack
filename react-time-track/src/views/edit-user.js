/** @jsx jsx */
import React from "react";
import {jsx} from "@emotion/core";
import {navigate} from "@reach/router";
import {Li, Title, UserCard, Card, Button} from "../components/ui";
import {getUser, editUser} from "../services/user";

function EditUser({user_id}) {
    const [user, setUser] = React.useState({
			name: "",
			email: "",
			role: "",
			rate: 0
		});

    React.useEffect(()=> {
			console.log(user_id)
      getUser(user_id)
      .then(data => {setUser(data)
    	});
		}, []);

	React.useEffect(()=> {
		console.log(user);
	}, [user]);

	function handleChange(e, key) {
		setUser({...user, [key]: e.target.value})
	}

	function handleSubmit(e) {
		e.preventDefault();
		editUser(user_id, user)
		.then(response => {
			navigate("/users");
		})
		.catch(response => {
			""
		});
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

			<form css={{marginTop: "5em", display: "flex", flexDirection: "column", width: "50%", fontSize: "20px"}} onSubmit={handleSubmit}>
				Name: <input type="text" name="user-name" onChange={(event)=>handleChange(event, "name")} value={user.name} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>
				Email: <input type="text" name="user-email" onChange={(event)=>handleChange(event, "email")} value={user.email} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>
				Role: <input type="text" name="user-role" onChange={(event)=>handleChange(event, "role")} value={user.role} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>
				Rate: <input type="text" name="user-rate" onChange={(event)=>handleChange(event, "rate")} value={user.rate} css={{fontSize: "16px", color: "gray", marginBottom: "10px"}}/>				
				<div css={{marginTop: "1em", display: "flex", textAlign: "center"}}>
					<Button type="submit">SAVE CHANGES</Button>
				</div>
			</form>	

		</div>
	);
}

export default EditUser;