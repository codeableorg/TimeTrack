import calculateWorkDays from "./calculateWorkDays";

/**
 * function calculateStatus(projectStartDate, projectEndDate, projectRealCost, projectEstimatedCost),
 * Sets the color whenever the project is above, according or below estimated costs, taking into account the date.
 * @param {Numeric} projectStartDate
 * @param {Numeric} projectEndDate
 * @param {Numeric} projectRealCost
 * @param {Numeric} projectEstimatedCost
 */
const red = { borderColor: "#f24636" };
const ambar = { borderColor: "#fec235" };
const green = { borderColor: "#52af50" };

function calculateStatus(
  projectStartDate,
  projectEndDate,
  projectRealCost,
  projectEstimatedCost
) {
  let riskValue = [];
  let currentDate = new Date();

  if (currentDate > new Date(projectEndDate)) {
    currentDate = new Date(projectEndDate);
  }

  if (currentDate < new Date(projectStartDate)) {
    currentDate = new Date(projectStartDate);
  }

  const progress =
    calculateWorkDays(projectStartDate, currentDate) /
    calculateWorkDays(projectStartDate, projectEndDate);
  const colorizer = projectRealCost / (projectEstimatedCost * progress);

  if (colorizer >= 1) riskValue = red;
  else if (colorizer < 1 && colorizer > 0.9) riskValue = ambar;
  else if (colorizer < 0.9) riskValue = green;
  return riskValue;
}

export default calculateStatus;
