/*
    this will act a cache for jobs that were to big to process
    with other current jobs or the master node did not detect any memory available
    this will be in control of pinging back to the master node
    while jobs are in the Queue
    the queue in this case will as a cache -> potentially using redis or another quick read db
*/

export class sendToPool {
  public currentQueue: any[];
  constructor() {
    // will init a new pool an each instance
    this.currentQueue = [];
  }

  initCache(): void {
    // inits the cache for the queue to sit in
  }

  terminateCache(): void {
    // kills the instance of the current cache
  }

  cacheInstance(): boolean {
    // return a boolean if there is a cache instance open
    return false;
  }

  insertPriorityQueue(): void {
    // inserts a job into the queue and gives it a priority
  }

  getNextJob(): void {
    // pulls the next out of the queue
  }

  run(): void {
    // runs while the queue is not empty
    // when empty it removed from reference/memory until needed again
  }
}
