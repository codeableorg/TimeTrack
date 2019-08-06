/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import UserForm from "../components/user-form";
import { getUser, editUser } from "../services/user";

function EditUser({ user_id }) {
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
    console.log(user);
    editUser(user_id, user)
      .then(response => {
        navigate("/users");
      })
      .catch(response => {
        "";
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
