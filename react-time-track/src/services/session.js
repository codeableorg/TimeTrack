<<<<<<< HEAD
const API_USERS = "http://localhost:3000/api/users";

async function userList() {
  const userList = await fetch(API_USERS, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
  
  if (!userList.ok) {
    const { errors } = await userList.json();
    console.log(errors);
    throw new Error(errors);
  }

  return userList.json();
}

export { userList};
=======
import { apiUrl } from "../util";

const API_LOGIN = `${apiUrl}login`;
const API_LOGOUT = `${apiUrl}logout`;

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function login({ email, password }) {
  const response = await fetch(API_LOGIN, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  });

  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors.message);
  }

  return response.json();
}

async function logout() {
  const response = await fetch(API_LOGOUT, {
    method: "DELETE",
    credentials: "include"
  });

  if (!response.ok) throw createError(response);
}

export { login, logout };
>>>>>>> Add login component, user services, user context
