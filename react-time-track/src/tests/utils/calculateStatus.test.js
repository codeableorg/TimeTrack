import calculateStatus from "../../utils/calculateStatus";

const testData = [
  {
    projectStartDate: "2019-07-08",
    projectEndDate: "2019-09-02",
    projectRealCost: "234000",
    projectEstimatedCost: "772800"
  },
  {
    projectStartDate: "2019-08-06",
    projectEndDate: "2019-09-02",
    projectRealCost: "0",
    projectEstimatedCost: "772800"
  },
  {
    projectStartDate: "2019-07-08",
    projectEndDate: "2019-09-02",
    projectRealCost: "772800",
    projectEstimatedCost: "772800"
  }
];

const expected = [
  { borderColor: "#52af50" },
  { borderColor: "#52af50" },
  { borderColor: "#f24636" }
];

test("Test functional function", () => {
  expect(
    calculateStatus(
      testData[0].projectStartDate,
      testData[0].projectEndDate,
      testData[0].projectRealCost,
      testData[0].projectEstimatedCost
    )
  ).toEqual(expected[0]);
});

test("Test response in same date data", () => {
  expect(
    calculateStatus(
      testData[1].projectStartDate,
      testData[1].projectEndDate,
      testData[1].projectRealCost,
      testData[1].projectEstimatedCost
    )
  ).toEqual(expected[1]);
});

test("Test function with overcosts", () => {
  expect(
    calculateStatus(
      testData[2].projectStartDate,
      testData[2].projectEndDate,
      testData[2].projectRealCost,
      testData[2].projectEstimatedCost
    )
  ).toEqual(expected[2]);
});
