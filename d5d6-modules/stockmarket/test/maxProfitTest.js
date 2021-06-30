const assert = require('chai').assert;
const maxProfit = require('../maxProfit');

describe("#stockMarket", () =>{
  it("Possible profit: [45, 2] expect -1", () => {
    const input = [45, 2];
    const expect = -1;
    assert.strictEqual(maxProfit(input), expect);
  });
  it("Possible profit: [45, 24, 35, 31, 40, 38, 11] expect 16", () =>{
    const input = [45, 24, 35, 31, 40, 38, 11];
    const expect = 16;
    assert.strictEqual(maxProfit(input), expect);
  });
  it("Possible profit: [45, 35, 31, 28, 11] expect -1", () =>{
    const input = [45, 35, 31, 28, 11];
    const expect = -1;
    assert.strictEqual(maxProfit(input), expect);
  });

});
