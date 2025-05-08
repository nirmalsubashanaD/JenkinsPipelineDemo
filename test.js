const add = require('./index');
const assert = require('assert');

try {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
  console.log("All tests passed!");
} catch (e) {
  console.error("Test failed:", e.message);
  process.exit(1);
}
