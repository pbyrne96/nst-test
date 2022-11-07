/*

ABSTRACT CLASS FOR:

initlazing a queue on AWS (SQS Queue)

*/

interface QueueConfig {
  API_KEY: string;
  PRIVATE_KEY: string;
}

interface QueueSessions {
  QUEUE_URL: string;
}

interface WorkerNode {
  addr: string;
  jobId: string;
}

export class InitBroker {
  private readonly queueConfig: QueueConfig | null = null;
  private readonly queueSession: QueueSessions;
  private taskQueue: Set<WorkerNode> = new Set();

  constructor(queueConfig: QueueConfig) {
    this.queueConfig = queueConfig;
    //
  }

  /**
   * sendJobToQueue
   */
  sendJobToQueue(): boolean {
    return false;
  }

  /**
   * requestNode
   */
  public requestNode(): WorkerNode {
    // pings workerNode for memory or a worker node task to execute incoming data
    return {
      addr: '',
      jobId: '-1',
    };
  }

  /**
   *
   * @param task
   */
  addToTaskQueue(task: WorkerNode): boolean {
    return false;
  }
}
