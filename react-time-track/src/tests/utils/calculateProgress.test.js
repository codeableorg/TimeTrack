import calculateProgress from "../../utils/calculateProgress";

const projectData = [
  {
    estimated: "720000",
    real: "720000",
    expected: "100%"
  },
  {
    estimated: "720000",
    real: "360000",
    expected: "50%"
  },
  {
    estimated: "1000000",
    real: "10000",
    expected: "1%"
  }
];

test("Test return progress function 1", () => {
  expect(
    calculateProgress(projectData[0].real, projectData[0].estimated)
  ).toEqual(projectData[0].expected);
});

test("Test return progress function 2", () => {
  expect(
    calculateProgress(projectData[1].real, projectData[1].estimated)
  ).toEqual(projectData[1].expected);
});

test("Test return progress function 3", () => {
  expect(
    calculateProgress(projectData[2].real, projectData[2].estimated)
  ).toEqual(projectData[2].expected);
});
