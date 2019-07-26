import calculateRisk from "../../utils/calculateRisk";

const projectData = [
  {
    start_date: "2019-07-20",
    end_date: "2019-09-10",
    estimated: "720000",
    real: "730000",
    expected: { borderColor: "#f24636" }
  },
  {
    start_date: "2019-07-20",
    end_date: "2019-09-10",
    estimated: "720000",
    real: "80000",
    expected: { borderColor: "#fec235" }
  },
  {
    start_date: "2019-07-20",
    end_date: "2019-09-10",
    estimated: "1000000",
    real: "1000",
    expected: { borderColor: "#52af50" }
  }
];

test("Test return progress function 1", () => {
  expect(
    calculateRisk(
      projectData[0].start_date,
      projectData[0].end_date,
      projectData[0].estimated,
      projectData[0].real
    )
  ).toEqual(projectData[0].expected);
});

test("Test return progress function 2", () => {
  expect(
    calculateRisk(
      projectData[1].start_date,
      projectData[1].end_date,
      projectData[1].estimated,
      projectData[1].real
    )
  ).toEqual(projectData[1].expected);
});

test("Test return progress function 3", () => {
  expect(
    calculateRisk(
      projectData[2].start_date,
      projectData[2].end_date,
      projectData[2].estimated,
      projectData[2].real
    )
  ).toEqual(projectData[2].expected);
});
