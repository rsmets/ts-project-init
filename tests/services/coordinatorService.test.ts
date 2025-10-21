import { describe, it } from "node:test";
import { CoordinatorService } from "../../src/services";
import assert from "node:assert";

describe("CoordinatorService", () => {
  it("Example happy path test", () => {
    const coordinatorService = new CoordinatorService(
      ["account1", "account2"],
      [{ id: "account1", expiration: 4 }]
    );

    assert.strictEqual(coordinatorService.isLocked("account1", 2), true);
    assert.strictEqual(coordinatorService.isLocked("account1", 4), false);
    assert.strictEqual(coordinatorService.isLocked("account2", 3), false);
    assert.strictEqual(coordinatorService.isLocked("account2", 4), false);
  });

  it("Example invalid account input test", () => {
    const coordinatorService = new CoordinatorService(
      ["account1", "account2"],
      [{ id: "account3", expiration: 4 }]
    );

    assert.strictEqual(coordinatorService.isLocked("account1", 2), false);
    assert.strictEqual(coordinatorService.isLocked("account1", 4), false);
    assert.strictEqual(coordinatorService.isLocked("account2", 3), false);
    assert.strictEqual(coordinatorService.isLocked("account2", 4), false);
  });

  it("Example input duplicate locks ids", () => {
    const coordinatorService = new CoordinatorService(
      ["account1", "account2"],
      [
        { id: "account3", expiration: 4 },
        { id: "account3", expiration: 0 },
      ]
    );

    assert.strictEqual(coordinatorService.isLocked("account1", 2), false);
    assert.strictEqual(coordinatorService.isLocked("account1", 4), false);
    assert.strictEqual(coordinatorService.isLocked("account2", 3), false);
    assert.strictEqual(coordinatorService.isLocked("account2", 4), false);
  });
});
