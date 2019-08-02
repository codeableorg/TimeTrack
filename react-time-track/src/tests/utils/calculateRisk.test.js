import calculateRisk from "../../utils/calculateRisk";

const weeklyData = [
  [
    {
      id: 1,
      week: "28",
      estimated_cost: "720000",
      real_cost: "730000"
    },
    {
      id: 2,
      week: "29",
      estimated_cost: "720000",
      real_cost: "730000"
    }
  ],
  [
    {
      id: 1,
      week: "28",
      estimated_cost: "720000",
      real_cost: "710000"
    },
    {
      id: 2,
      week: "29",
      estimated_cost: "720000",
      real_cost: "710000"
    }
  ],
  [
    {
      id: 1,
      week: "28",
      estimated_cost: "1000000",
      real_cost: "30000"
    },
    {
      id: 2,
      week: "29",
      estimated_cost: "1000000",
      real_cost: "20000"
    },
    {
      id: 3,
      week: "30",
      estimated_cost: "1000000",
      real_cost: "10000"
    }
  ]
];

const weeklyExpected = [
  { borderColor: "#f24636" },
  { borderColor: "#fec235" },
  { borderColor: "#52af50" }
];

test("Test return progress function 1", () => {
  expect(calculateRisk(weeklyData[0])).toEqual(weeklyExpected[0]);
});

test("Test return progress function 2", () => {
  expect(calculateRisk(weeklyData[1])).toEqual(weeklyExpected[1]);
});

test("Test return progress function 3", () => {
  expect(calculateRisk(weeklyData[2])).toEqual(weeklyExpected[2]);
});
