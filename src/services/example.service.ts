import { ServiceInterface } from "./example.service.interface";
import { ServiceInput, ServiceResponse } from "../types";

/**
 * Simple example service that demonstrates basic service functionality
 * Returns a simple text response
 * Initialization happens in the constructor, so the service is ready to use immediately
 */
export class ExampleService
  implements ServiceInterface<ServiceInput, ServiceResponse>
{
  /**
   * Constructor initializes the service
   * Sets up internal state and performs any required setup
   */
  constructor() {
    console.log("🔧 Initializing ExampleService...");
    console.log("✅ ExampleService initialized successfully");
  }

  /**
   * Execute the main functionality of the example service
   * Returns a simple text response
   * @param input - Optional input containing a message
   * @returns Promise that resolves with a simple text response
   */
  async execute(input?: ServiceInput): Promise<ServiceResponse> {
    console.log("🚀 Executing ExampleService...");

    // Return a simple text response
    const response: ServiceResponse = {
      text: "hello world",
    };

    console.log("📊 ExampleService execution completed");
    console.log("📈 Response:", response);

    return response;
  }

  /**
   * Clean up resources used by the service
   * Performs any necessary cleanup
   */
  async cleanup(): Promise<void> {
    console.log("🧹 Cleaning up ExampleService...");
    console.log("✅ ExampleService cleanup completed");
  }

  /**
   * Get the name of the service
   * @returns The service name
   */
  getName(): string {
    return "ExampleService";
  }
}
