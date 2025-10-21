import { CoordinatorInterface } from "./coordinator.service.interface";
import { ServiceInput, ServiceResponse } from "../types";

/**
 * Simple example service that demonstrates basic service functionality
 * Returns a simple text response
 * Initialization happens in the constructor, so the service is ready to use immediately
 */

interface LockInfo {
  id: string;
  expiration: number;
}

export class CoordinatorService implements CoordinatorInterface {
  // map to hold locks
  private locksMap: Map<string, number> = new Map();

  constructor(accounts: string[], activeLocks: Array<LockInfo>) {
    // loop over the locks and populate the locksMap
    activeLocks.forEach((lock) => {
      this.locksMap.set(lock.id, lock.expiration);
    });
  }

  isLocked(id: string, currentTime: number): boolean {
    // check if the lock is in the locksMap base on id
    const lockExpiration = this.locksMap.get(id);
    if (!lockExpiration) return false;

    // if there is then check to ensure expiration date is in the future
    return lockExpiration > currentTime;
  }
}
