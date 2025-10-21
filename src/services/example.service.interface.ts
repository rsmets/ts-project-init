import { ServiceInput, ServiceResponse } from "../types";

/**
 * Base interface for all services in the application
 * Provides a common contract that all services must implement
 * Services are initialized in their constructor, so no separate initialize() method is needed
 */
export interface ExampleServiceInterface {
  /**
   * Execute the service with the provided input
   * @param input - The input data for the service
   * @returns Promise that resolves to the service response
   */
  execute(input: ServiceInput): Promise<ServiceResponse>;
}
