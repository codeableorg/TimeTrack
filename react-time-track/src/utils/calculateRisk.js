/**
 *Sets the color whenever the project is above, according or below estimated costs.
 @param {Object} project - project object that contains: start_date, end_date, real_cost, estimated_cost
 */

export default function calculateRisk(project) {
  const red = { borderColor: "#f24636" };
  const ambar = { borderColor: "#fec235" };
  const green = { borderColor: "#52af50" };

  let riskValue = [];

  const projectDays =
    (Date.parse(project.end_date) + 1 - Date.parse(project.start_date)) /
    (1000 * 60 * 60 * 24); // calculate duration of the project

  const usedDays =
    (Date.now() - Date.parse(project.start_date)) / (1000 * 60 * 60 * 24); // calculate used days

  const currentEstimatedCost =
    (project.estimated_cost * usedDays) / projectDays;

  const currentRealCost = project.real_cost;

  // Comment/delete the following line if it is no longer required.
  console.log(
    `Proyecto: ${project.id}
    ---------------
    Estado Cerrado: ${project.closed},
    Días usados: ${Math.abs(Math.round(usedDays))},
    Días totales: ${Math.abs(Math.round(projectDays))},
    Fecha inicial: ${project.start_date},
    Fecha actual: ${new Date()},
    Costo estimado proyecto: ${project.estimated_cost}, 
    Costo real proyecto: ${project.real_cost}, 
    Costo estimado actual: ${currentEstimatedCost},
    Costo real actual: ${currentRealCost},
    Estado: ${(currentRealCost / currentEstimatedCost) * 100}`
  );
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
