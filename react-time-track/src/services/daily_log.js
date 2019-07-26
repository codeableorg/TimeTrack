import { apiUrl } from "../util";

const API_DAILY_LOG = `${apiUrl}daily_logs`;

async function createDailyLog(dailyData) {
  const response = await fetch(API_DAILY_LOG, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dailyData)
  });

  if (!response.ok) {
    const { errors } = await response.json();
    console.log(errors.message);
    throw new Error(errors.message);
  }

  return response.json();
}

export { createDailyLog };
