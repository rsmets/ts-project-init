import { describe, it } from "node:test";
import { ExampleService } from "../../src/services";
import assert from "node:assert";

describe("ExampleService", () => {
  it("Example happy path test with default input", async () => {
    const exampleService = new ExampleService("TestService");

    const result = await exampleService.execute({});

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

  it("Example test with empty message", async () => {
    const exampleService = new ExampleService("EmptyService");

    const result = await exampleService.execute({
      message: "",
    });

    assert.strictEqual(
      result.text,
      "EmptyService: Hello from the EmptyService!",
    );
  });

  it("Example test with default service name", async () => {
    const exampleService = new ExampleService("DefaultService");

    const result = await exampleService.execute({
      message: "Default name test",
    });

    assert.strictEqual(result.text, "DefaultService: Default name test");
  });
});
