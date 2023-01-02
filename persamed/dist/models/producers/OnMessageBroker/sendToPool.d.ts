export declare class sendToPool {
    currentQueue: any[];
    constructor();
    initCache(): void;
    terminateCache(): void;
    cacheInstance(): boolean;
    insertPriorityQueue(): void;
    getNextJob(): void;
    run(): void;
}
