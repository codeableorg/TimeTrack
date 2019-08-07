import calculateWorkDays from "./calculateWorkDays";

/**
 * function calculateStatus(projectStartDate, projectEndDate, projectRealCost, projectEstimatedCost),
 * Sets the color whenever the project is above, according or below estimated costs, taking into account the date.
 * @param {Numeric} projectStartDate
 * @param {Numeric} projectEndDate
 * @param {Numeric} projectRealCost
 * @param {Numeric} projectEstimatedCost
 */

function calculateStatus(
  projectStartDate,
  projectEndDate,
  projectRealCost,
  projectEstimatedCost
) {
  const red = { borderColor: "#f24636" };
  const ambar = { borderColor: "#fec235" };
  const green = { borderColor: "#52af50" };

  let riskValue = [];
  let currentDate = new Date();
  console.log("Fecha actual", currentDate);

  if (currentDate > new Date(projectEndDate)) {
    currentDate = new Date(projectEndDate);
    console.log("Fecha mayor a projectEndDate:", currentDate);
  }

  if (currentDate < new Date(projectStartDate)) {
    currentDate = new Date(projectStartDate);
    console.log("Fecha menor a projectStartDate", currentDate);
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
