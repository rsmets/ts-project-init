export interface Config {
  name: string;
  version: string;
}

/**
 * Simple service response interface
 * Defines the structure of data returned by service execution
 */
export interface ServiceResponse {
  text: string;
}

/**
 * Simple service input interface
 * Defines the structure of input data that can be passed to services
 */
export interface ServiceInput {
  message?: string;
}
