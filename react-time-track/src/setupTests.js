import { cleanup } from "@testing-library/react";

global.fetch = require("jest-fetch-mock");

afterEach(cleanup);
beforeEach(() => {
  fetch.resetMocks();
});
