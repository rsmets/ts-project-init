import { Config, ServiceInput, ServiceResponse } from "./types";
import { ExampleService } from "./services";

/**
 * Main entry point of the application
 * Demonstrates service creation (with constructor initialization), execution, and cleanup
 */
async function main() {
  const config: Config = {
    name: "typescript-project-init",
    version: "1.0.0",
  };

  console.log(`🚀 Starting ${config.name} v${config.version}`);
  console.log("=".repeat(50));

  // Create the example service
  const exampleService = new ExampleService("MyExampleService");

  try {
    // Execute the service with default input
    console.log("\n📊 Running service with default input...");
    const result = await exampleService.execute({});
    console.log("Result:", result);

    // Execute the service with custom input
    console.log("\n📊 Running service with custom input...");
    const customResult = await exampleService.execute({
      message: "This is a custom message!",
    });
    console.log("Custom Result:", customResult);
  } catch (error) {
    console.error("❌ Error during service execution:", error);
  }

  console.log("\n✅ Application execution completed successfully");
  console.log("=".repeat(50));
}

// Execute the main function and handle any uncaught errors
main().catch((error) => {
  console.error("💥 Fatal error in main:", error);
  process.exit(1);
});
