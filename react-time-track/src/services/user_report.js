import { apiUrl } from "../util";

const API_WEEKLY_REPORT = `${apiUrl}project_members/report_detail`;

async function getUserReport(projectId, userId) {
  const response = await fetch(
    `${API_WEEKLY_REPORT}?project_id=${projectId}&user_id=${userId}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  if (!response.ok) {
    const { errors } = await response.json();
    console.log(errors);
    throw new Error(errors.message);
  }

  return response.json();
}

export { getUserReport };
