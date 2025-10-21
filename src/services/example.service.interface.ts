/**
 * Base interface for all services in the application
 * Provides a common contract that all services must implement
 * Services are initialized in their constructor, so no separate initialize() method is needed
 */
export interface ServiceInterface<TInput = any, TOutput = any> {
  /**
   * Execute the main functionality of the service
   * @param input - Optional input parameters for the service
   * @returns Promise that resolves with the service result
   */
  execute(input?: TInput): Promise<TOutput>;

  /**
   * Clean up resources used by the service
   * @returns Promise that resolves when cleanup is complete
   */
  cleanup(): Promise<void>;

  /**
   * Get the name of the service
   * @returns The service name
   */
  getName(): string;
}
