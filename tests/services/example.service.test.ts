import { describe, it } from "node:test";
import { ExampleService } from "../../src/services";
import assert from "node:assert";

describe("ExampleService", () => {
  it("Example happy path test with default input", async () => {
    const exampleService = new ExampleService("TestService");

    const result = await exampleService.execute({
      message: "Hello from the TestService!",
    });

    assert.strictEqual(result.text, "TestService: Hello from the TestService!");
  });

  it("Example test with custom message", async () => {
    const exampleService = new ExampleService("CustomService");

    const result = await exampleService.execute({
      message: "This is a custom test message!",
    });

    assert.strictEqual(
      result.text,
      "CustomService: This is a custom test message!",
    );
  });

  it("Example test with default service name", async () => {
    const exampleService = new ExampleService("DefaultService");

    const result = await exampleService.execute({
      message: "Default name test",
    });

    assert.strictEqual(result.text, "DefaultService: Default name test");
  });

  it("Example test with invalid input", async () => {
    const exampleService = new ExampleService("InvalidService");

    try {
      await exampleService.execute({});
    } catch (error) {
      assert.strictEqual(error.message, "Invalid input");
      return;
    }

    assert.strictEqual(true, false);
  });
});
