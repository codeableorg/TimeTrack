/**
 *Sets the color whenever the project is above, according or below estimated costs.
 @param {String} start_date - string with start date for project
 @param {String} end_date - string with final date for project
 @param {String} estimated_cost - string with estimated_cost for project
 @param {String} real_cost - string with real_cost for project
 */

export default function calculateRisk(
  start_date,
  end_date,
  estimated_cost,
  real_cost
) {
  const red = { borderColor: "#f24636" };
  const ambar = { borderColor: "#fec235" };
  const green = { borderColor: "#52af50" };

  let riskValue = [];

  const projectDays =
    (Date.parse(end_date) + 1 - Date.parse(start_date)) / (1000 * 60 * 60 * 24); // calculate duration of the project

  const usedDays =
    (Date.now() - Date.parse(start_date)) / (1000 * 60 * 60 * 24); // calculate used days

  const currentEstimatedCost = (estimated_cost * usedDays) / projectDays;

  const currentRealCost = real_cost;

  // Comment/delete the following line if it is no longer required.
  /*console.log(
    `Proyecto data
    ---------------
    Días usados: ${Math.abs(Math.round(usedDays))},
    Días totales: ${Math.abs(Math.round(projectDays))},
    Fecha inicial: ${start_date},
    Fecha actual: ${new Date()},
    Costo estimado proyecto: ${estimated_cost}, 
    Costo real proyecto: ${real_cost}, 
    Costo estimado actual: ${currentEstimatedCost},
    Costo real actual: ${currentRealCost},
    Estado: ${(currentRealCost / currentEstimatedCost) * 100}`
  );*/
  // Comment delete the above line if it is no longer required.

  if (currentRealCost / currentEstimatedCost > 1) riskValue = red;
  else if (
    currentRealCost / currentEstimatedCost < 1 &&
    currentRealCost / currentEstimatedCost > 0.9
  )
    riskValue = ambar;
  else if (currentRealCost / currentEstimatedCost < 0.9) riskValue = green;
  return riskValue;
}
