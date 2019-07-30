import { apiUrl } from "../util";

const API_GET_PROJECT_MEMBER = `${apiUrl}project_members`;

async function getProjectMember(user_id, project_id) {
  const response = await fetch(
    `${API_GET_PROJECT_MEMBER}?user_id=${user_id}&&project_id=${project_id}`,
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
    console.log(errors.message);
    throw new Error(errors.message);
  }

  return response.json();
}

export { getProjectMember };
