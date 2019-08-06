/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";
import { getUser, editUser } from "../services/user";
import { UserContext } from "../contexts/user";

function EditUser({ user_id }) {
  const logged = React.useContext(UserContext);
  const alert = useAlert();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    role: "",
    rate: 0
  });

  React.useEffect(() => {
    getUser(user_id).then(data => setUser(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    editUser(user_id, user)
      .then(response => {
        alert.success(`User ${user.name} was updated successfully`);
        navigate("/users");
      })
      .catch(response => {
        console.log(response.message);
        if (response.message === "Access denied") logged.onLogout();
      });
  }

  return (
    <UserForm
      initialValue={{ user, setUser }}
      inputs={[["name", "text"], ["email", "email"], ["rate", "number"]]}
      onSubmitFn={handleSubmit}
    />
  );
}

export default EditUser;
