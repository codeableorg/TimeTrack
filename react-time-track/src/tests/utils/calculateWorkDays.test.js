import calculateWorkDays from "../../utils/calculateWorkDays";

const testData = [
  { firstDate: "2019-07-08", lastDate: "2019-09-02", expected: 41 },
  { firstDate: "2019-08-06", lastDate: "2019-08-06", expected: 1 },
  { firstDate: new Date(), lastDate: "2019-08-05", expected: 0 }
];

test("Calculate work days", () => {
  expect(
    calculateWorkDays(testData[0].firstDate, testData[0].lastDate)
  ).toEqual(testData[0].expected);
});

test("Calculate same day work days", () => {
  expect(
    calculateWorkDays(testData[1].firstDate, testData[1].lastDate)
  ).toEqual(testData[1].expected);
});

test("Calculate wrong endDate and Date object", () => {
  expect(
    calculateWorkDays(testData[2].firstDate, testData[2].lastDate)
  ).toEqual(testData[2].expected);
});
