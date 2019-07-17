import { apiUrl } from "../util";

const API_ALL_PROJECTS = `${apiUrl}projects`;
const API_CLOSED_PROJECTS = `${apiUrl}histories`;

async function listProjects() {
  const list = await fetch(API_ALL_PROJECTS, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
  return list;
}

async function closedProjects() {
  const list = await fetch(API_CLOSED_PROJECTS, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
  return list;
}

export { listProjects, closedProjects };
