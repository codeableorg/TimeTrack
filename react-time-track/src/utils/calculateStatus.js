import calculateWorkDays from "./calculateWorkDays";

// const calculateWorkDays = require("./calculateWorkDays");

/**
 * function projectStatus(projectStartDate, projectEndDate, projectRealCost, projectEstimatedCost),
 * Sets the color whenever the project is above, according or below estimated costs, taking into account the date.
 * @param {Numeric} projectStartDate
 * @param {Numeric} projectEndDate
 * @param {Numeric} projectRealCost
 * @param {Numeric} projectEstimatedCost
 */

function projectStatus(
  projectStartDate,
  projectEndDate,
  projectRealCost,
  projectEstimatedCost
) {
  // console.log("projectStartDate:", projectStartDate);
  // console.log("type projectStartDate:", typeof projectStartDate);
  // console.log("projectEndDate:", projectEndDate);
  // console.log("type projectEndDate:", typeof projectEndDate);
  let riskValue = [];
  const red = { borderColor: "#f24636" };
  const ambar = { borderColor: "#fec235" };
  const green = { borderColor: "#52af50" };

  const currentDate = new Date();
  // console.log("currentDate:", currentDate);
  // console.log("type currentDate:", typeof currentDate);
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

// console.log(
//   "First individual project color: ",
//   projectStatus("2019-07-08", "2019-09-02", 74400, 198400)
// );

// console.log(
//   "Second individual project color: ",
//   projectStatus("2019-08-06", "2019-09-06", 0, 275200)
// );

export default projectStatus;
