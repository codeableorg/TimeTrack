const API_ALL_PROJECTS = "http://localhost:3000/api/projects";
const API_CLOSED_PROJECTS = "http://localhost:3000/api/histories";

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
