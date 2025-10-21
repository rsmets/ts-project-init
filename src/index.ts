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
  const exampleService = new ExampleService();

  try {
    // Execute the service with default input
    console.log("\n📊 Running service with default input...");
    const defaultResult: ServiceResponse = await exampleService.execute();

    // Execute the service with custom input
    console.log("\n📊 Running service with custom input...");
    const customInput: ServiceInput = {
      message: "Hello from custom input!",
    };
    const customResult: ServiceResponse = await exampleService.execute(
      customInput
    );

    // Execute the service one more time
    console.log("\n📊 Running service again...");
    const thirdResult: ServiceResponse = await exampleService.execute();

    // Display summary
    console.log("\n📋 Service Execution Summary:");
    console.log(`   Service Name: ${exampleService.getName()}`);
    console.log(`   Default Result: ${defaultResult.text}`);
    console.log(`   Custom Result: ${customResult.text}`);
    console.log(`   Third Result: ${thirdResult.text}`);
  } catch (error) {
    console.error("❌ Error during service execution:", error);
  } finally {
    // Always cleanup the service
    console.log("\n🧹 Cleaning up services...");
    await exampleService.cleanup();
  }

  console.log("\n✅ Application execution completed successfully");
  console.log("=".repeat(50));
}

// Execute the main function and handle any uncaught errors
main().catch((error) => {
  console.error("💥 Fatal error in main:", error);
  process.exit(1);
});
