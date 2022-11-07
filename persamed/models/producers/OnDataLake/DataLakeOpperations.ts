// Operations for batch jobs to executed
// will utilize websocket archetecure
import { Queue } from 'models/utilsClasses/Queue';
import { AppService } from 'src/app.service';
import { DataClass } from '../../utilsClasses/DataClass';

interface Jobs {
  id: string;
}

interface WorkerNode<T> {
  id: string;
  partitioned: boolean;
  partitionedJobs: T[];
}

export class DataLakeOpps {
  private jobsToRun = [];
  private dataConnection: DataClass;
  private currentQueue: Queue<Jobs>;

  constructor() {
    Object.defineProperty(this, 'fetchedData', {
      get() {
        // call query class from db here
        return [];
      },
    });
  }

  sendToWorker(givenJob: Jobs): WorkerNode<Jobs> {
    /*
        sends givenJob to queue service:
            if it exceeds memory limit ->
                partions into seperate chunks and returns those chunks
    */
    return { id: '1', partitioned: false, partitionedJobs: [] };
  }

  processPriority(givenJob: Jobs): Jobs {
    // access the priority of a given job
    return { id: '1' };
  }

  public run(): void {
    // this should be set in time blocks and treat the queue as Peer to peer archetecure
    while (this.currentQueue.size) {
      const currentNode = this.currentQueue.dequeue();
      const jobProcessed = this.sendToWorker(currentNode);
      if (jobProcessed.partitioned) {
        // if job is not a success send back to priority queue
        // init the prioritization of the job and call enqueue on the returned partition
      }
    }
  }
}
