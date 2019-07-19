import { apiUrl } from "../util";

const API_CHANGE = `${apiUrl}change-password`;
const API_RESET = `${apiUrl}reset-password`;

async function findUser({ email }) {
  const response = await fetch(API_CHANGE, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" }
  });

  if (!response.ok) {
    const { errors } = await response.json();
    console.log(errors.message);
    throw new Error(errors.message);
  }

  return response.json();
}

async function reset(token, password) {
  const response = await fetch(API_RESET, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ token, password }),
    headers: { "Content-Type": "application/json" }
  });

  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors.message);
  }

  return response.json();
}

export { findUser, reset };
