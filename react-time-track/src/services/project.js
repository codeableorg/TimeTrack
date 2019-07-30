import { apiUrl } from "../util";

const API_ALL_PROJECTS = `${apiUrl}projects`;
const API_CLOSED_PROJECTS = `${apiUrl}histories`;

async function listProjects() {
  const response = await fetch(API_ALL_PROJECTS, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const { errors } = await response.json();
    console.log(errors.message);
    throw new Error(errors.message);
  }

  return response.json();
}

async function closedProjects() {
  const response = await fetch(API_CLOSED_PROJECTS, {
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

async function getProjectDetail(projectId) {
  const response = await fetch(`${API_ALL_PROJECTS}/${projectId}`, {
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

export { listProjects, closedProjects, getProjectDetail };
