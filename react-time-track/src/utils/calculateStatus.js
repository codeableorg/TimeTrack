import calculateWorkDays from "./calculateWorkDays";
// const calculateWorkDays = require("./calculateWorkDays");

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
  /*
  console.log(`calculateStatus:
  projectStartDate: ${projectStartDate}
  projectEndDate: ${projectEndDate}
  projectRealCost: ${projectRealCost}
  projectEstimatedCost: ${projectEstimatedCost}
  currentDate: ${currentDate}
  # workdays till current date: ${calculateWorkDays(
    projectStartDate,
    currentDate
  )}
  # workdays till end date: ${calculateWorkDays(
    projectStartDate,
    projectEndDate
  )}
  progress: ${progress}
  colorizer: ${colorizer}`);
*/
  if (colorizer >= 1) riskValue = red;
  else if (colorizer < 1 && colorizer > 0.9) riskValue = ambar;
  else if (colorizer < 0.9) riskValue = green;
  return riskValue;
}
/*
console.log(
  "calculate Status 1",
  calculateStatus("2019-07-08", "2019-09-02", 234000, 772800)
);
console.log(
  "calculate Status 2",
  calculateStatus("2019-08-06", "2019-09-02", 0, 772800)
);
console.log(
  "calculate Status 3",
  calculateStatus(new Date(), "2019-07-02", 0, 772800)
);
console.log(
  "calculate Status 4",
  calculateStatus("2019-09-02", "2019-09-02", 0, 772800)
);
*/
export default calculateStatus;
