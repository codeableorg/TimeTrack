import { apiUrl } from "../util";

const API_USERS = `${apiUrl}users`;

async function userList() {
  const userList = await fetch(API_USERS, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!userList.ok) {
    const { errors } = await userList.json();
    console.log(errors);
    throw new Error(errors);
  }

  return userList.json();
}

async function getProjectUser(userId) {
  const response = await fetch(`${API_USERS}/${userId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const { errors } = await response.json();
    console.log(errors);
    throw new Error(errors);
  }

  return response.json();
}

export { userList, getProjectUser };
