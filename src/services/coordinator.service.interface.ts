/**
 * Base interface for all services in the application
 * Provides a common contract that all services must implement
 * Services are initialized in their constructor, so no separate initialize() method is needed
 */
export interface CoordinatorInterface {
  // check if the coordinator is locked
  isLocked(id: string, currentTime: number): boolean;
}
