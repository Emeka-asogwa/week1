var assert = require("chai").assert;
var numBottlesToReceive = require("../poppinBottles.js");

describe("Bottle recycling program", function() {
  it("should return 17 given an input of 20", function() {
    assert.strictEqual(numBottlesToReceive(20).totalBottles, 17);
  });

  it("should return 3 given an input of 5", function() {
    assert.strictEqual(numBottlesToReceive(5).totalBottles, 3);
  });

});