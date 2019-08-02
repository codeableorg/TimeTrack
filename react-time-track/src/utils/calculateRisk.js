/**
 * Function resumeWeekly(weeklyData)
 * Reduces estimated and real cost of the input data and returns it as an array.
 * @param {array} weeklyData array of objects with all weekly data
 */

function resumeWeekly(weeklyData) {
  const projectsCosts = weeklyData.reduce((accum, data) => {
    if (data === 0) return void 0;
    if (accum.length === 0) {
      accum.push(data.estimated_cost);
      accum.push(data.real_cost);
      return accum;
    }
    accum[0] = accum[0] + data.estimated_cost;
    accum[1] = accum[1] + data.real_cost;
    return accum;
  }, []);
  return projectsCosts;
}

/**
 * Function calculateRisk(weekly)
 *Sets the color whenever the project is above, according or below estimated costs.
 @param {array} weekly - array of objects with all the weekly data: id, estimated_cost, real_cost, week
 
 */

function calculateRisk(weekly) {
  const red = { borderColor: "#f24636" };
  const ambar = { borderColor: "#fec235" };
  const green = { borderColor: "#52af50" };

  let riskValue = [];
  let weekData = [];

  if (weekly.length === 0) weekData = [0, 0];
  else weekData = resumeWeekly(weekly);

  const colorizer = weekData[1] / weekData[0];

  if (colorizer >= 1) riskValue = red;
  else if (colorizer < 1 && colorizer > 0.9) riskValue = ambar;
  else if (colorizer < 0.9) riskValue = green;
  return riskValue;
}

export default calculateRisk;
