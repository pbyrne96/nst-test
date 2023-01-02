interface QueueConfig {
    API_KEY: string;
    PRIVATE_KEY: string;
}
interface WorkerNode {
    addr: string;
    jobId: string;
}
export declare class InitBroker {
    private readonly queueConfig;
    private readonly queueSession;
    private taskQueue;
    constructor(queueConfig: QueueConfig);
    sendJobToQueue(): boolean;
    requestNode(): WorkerNode;
    addToTaskQueue(task: WorkerNode): boolean;
}
export {};
