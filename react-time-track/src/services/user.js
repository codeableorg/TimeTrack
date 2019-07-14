const API_USERS = "http://localhost:3000/api/users";

async function userList() {
  const userList = await fetch(API_USERS, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
  return userList;
}

export { userList};
