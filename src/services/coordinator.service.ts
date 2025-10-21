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
  private accountsHashSet: Set<string> = new Set();
  private locksMap: Map<string, number> = new Map();

  constructor(accounts: string[], activeLocks: Array<LockInfo>) {
    // loop over the accounts and populate the accountsHashSet
    accounts.forEach((account) => {
      this.accountsHashSet.add(account);
    });

    // loop over the locks and populate the locksMap
    activeLocks.forEach((lock) => {
      this.locksMap.set(lock.id, lock.expiration);
    });
  }

  /**
   * Check if the coordinator is locked
   *
   * if an lockId is pass that is not part of the initial accounts array, throw an error
   * @param id
   * @param currentTime
   * @returns
   */
  isLocked(id: string, currentTime: number): boolean {
    // check if the account is part of the initial accounts array
    if (!this.accountsHashSet.has(id)) {
      throw new Error("Account not found");
    }

    // check if the lock is in the locksMap base on id
    const lockExpiration = this.locksMap.get(id);
    if (!lockExpiration) return false;

    // if there is then check to ensure expiration date is in the future
    return lockExpiration > currentTime;
  }
}
