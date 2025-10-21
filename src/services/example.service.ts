import { ExampleServiceInterface } from "./example.service.interface";
import { ServiceInput, ServiceResponse } from "../types";

/**
 * Simple example service that demonstrates basic service functionality
 * Returns a simple text response
 * Initialization happens in the constructor, so the service is ready to use immediately
 */
export class ExampleService implements ExampleServiceInterface {
  private readonly serviceName: string;

  constructor(serviceName: string = "ExampleService") {
    // Initialize the service with a name
    this.serviceName = serviceName;
  }

  /**
   * Execute the service with the provided input
   * This is a simple example that returns a greeting message
   * @param input - The input data for the service
   * @returns Promise that resolves to a service response
   */
  async execute(input: ServiceInput): Promise<ServiceResponse> {
    // Create a response based on the input
    const message = input.message || `Hello from the ${this.serviceName}!`;

    return {
      text: `${this.serviceName}: ${message}`,
    };
  }
}
