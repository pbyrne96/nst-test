// uses the worker - producer architecture to write pdf's that have been scanned into a data lake or warehouse.
interface DataLakeInsertion<T> {
  timeStamp: string;
  jobId: string;
  dataGiven: T;
}

export class dataLakeStage<T> implements DataLakeInsertion<T> {
  timeStamp: string;
  jobId: string;
  dataGiven: T;
}
