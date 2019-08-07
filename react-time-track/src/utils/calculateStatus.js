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
  let riskValue = [];
  const red = { borderColor: "#f24636" };
  const ambar = { borderColor: "#fec235" };
  const green = { borderColor: "#52af50" };

  const currentDate = new Date();
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
