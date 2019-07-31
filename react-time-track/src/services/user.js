import { apiUrl } from "../util";
//http://localhost:3000/api/

const API_USERS = `${apiUrl}users`;
//http://localhost:3000/api/users/1/projects

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

async function createUser(userData) {
  console.log(userData);
  const response = await fetch(API_USERS, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors.message);
  }

  return response.json();
}

async function getUserProjects(user_id) {
  const response = await fetch(`${API_USERS}/${user_id}/projects`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors.message);
  }

  return response.json();
}

async function getUser(userId) {
  console.log(userId);
  const response = await fetch(`${API_USERS}/${userId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const {errors} = await response.json();
    throw new Error(errors.message);
  }

  return response.json();
}

async function editUser(userId) {
  console.log(userId);
  const response = await fetch(`${API_USERS}/${userId}`, {
    method: "PUT",
    credential: "include",
    headers: {
      "Content-type": "application/json"
    }
  });

  if (!response.ok) {
    const {errors} = await response.json();
    throw new Error(errors.message);
  }

  return response.json();
}

export { userList, createUser, getUserProjects, getUser, editUser };
