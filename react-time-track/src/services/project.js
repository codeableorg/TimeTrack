import { apiUrl } from "../util";

const API_ALL_PROJECTS = `${apiUrl}projects`;
const API_CLOSED_PROJECTS = `${apiUrl}histories`;
const API_MY_PROJECTS = `${apiUrl}projects/my-projects`;

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

async function listUserProjects() {
  const response = await fetch(API_MY_PROJECTS, {
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
    throw new Error(errors.message);
  }

  return response.json();
}

async function closeProject(projectId) {
  const response = await fetch(`${API_ALL_PROJECTS}/${projectId}/close`, {
    method: "PUT",
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
    throw new Error(errors.message);
  }

  return response.json();
}

async function createProject(projectData) {
  const response = await fetch(API_ALL_PROJECTS, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(projectData)
  });

  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors.message);
  }

  return response.json();
}

export {
  listProjects,
  closedProjects,
  getProjectDetail,
  createProject,
  listUserProjects,
  closeProject
};
