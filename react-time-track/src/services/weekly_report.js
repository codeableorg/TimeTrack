import { apiUrl } from "../util";

const API_WEEKLY_REPORT = `${apiUrl}weekly_project_reports`;

async function getWeeklyReport(projectId) {
  const response = await fetch(`${API_WEEKLY_REPORT}/${projectId}`, {
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

export { getWeeklyReport };
