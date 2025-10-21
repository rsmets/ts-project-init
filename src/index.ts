import { Config, ServiceInput, ServiceResponse } from "./types";
import { CoordinatorService, ExampleService } from "./services";

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

  const accounts = ["account1", "account2"];
  const activeLocks = [{ id: "account1", expiration: 4 }];

  // create the coordinator service
  const coordinatorService = new CoordinatorService(accounts, activeLocks);

  try {
    // Execute the service with default input
    console.log("\n📊 Running service with default input...");
    const result = coordinatorService.isLocked("account1", 2);
    console.log(result);
    const result2 = coordinatorService.isLocked("account1", 4);
    console.log(result2);
    const result3 = coordinatorService.isLocked("account2", 3);
    console.log(result3);
    const result4 = coordinatorService.isLocked("account2", 4);
    console.log(result4);
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
