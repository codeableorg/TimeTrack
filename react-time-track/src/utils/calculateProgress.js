/**
 * Calculates a project's progress percentage considering only the consumed budget (project.real_cost)
 * @param {String} real - should get project.real_cost
 * @param {String} estimated - should get project.estimated_cost
 */

export default function calculateProgress(real, estimated) {
  return ((parseInt(real) / parseInt(estimated)) * 100).toFixed(0) + "%";
}
