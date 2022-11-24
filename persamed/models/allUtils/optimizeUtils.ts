import { CallOperation } from '../models';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const os = require('os');

export const getSizeOfArrayInBytes = <T>(values: T[]): number => {
  return JSON.stringify(values).replace(/[\[\]\,\"]/g, '').length;
};

export const findAvailableMemory = <T>(values: T[]): number => {
  /*
    THIS FUNCTION WILL BE HELPFUL IN EDGE COMPUTATION -->
    Recommended to calculate current memory use in order to request more worked nodes
    It will be bound to an IO task on the cloud and will be able to help split the amount of nodes needed
    i.e lambda functions and so on.

    TODO: -> when terraform integrated -> pool remaining data into a new node and wait for current computation to be completed
  */
  const arraySizeInBytes = getSizeOfArrayInBytes(values);
  const freeMemory = os.freemem(); // may have to change to a function which compute current memory alloc in AWS
  if (arraySizeInBytes > Math.ceil(freeMemory / 2)) {
    return Math.ceil(freeMemory - arraySizeInBytes);
  }
  return arraySizeInBytes;
};

export const getOptimalChunkSize = <T>(values: T[]): number => {
  /*
    Function for returning the optimal chunk size for a given input
    will need various IO helper operations/functions on a given data point
  */
  const freeMemory = findAvailableMemory(values);
  const chunkSize = Math.max(Math.floor(values.length / freeMemory), 1);
  return chunkSize >= 1 ? chunkSize : 6;
};

export const chunkArray = <T>(values: T[]): [T[]] => {
  const chunkDepth = getOptimalChunkSize(values);
  const chunks = (a: T[]) =>
    Array.from(new Array(Math.ceil(a.length / chunkDepth)), (_, i) =>
      a.slice(i * chunkDepth, i * chunkDepth + chunkDepth),
    );
  return chunks(values) as [T[]];
};

export const chunkLargeArrayAndPerformOperation = <T>(
  values: T[],
  action: CallOperation<T>,
): void => {
  /*
    If a large cohort of data is given this function will:
        -> read the max amount available and put the reaming data in a queue.
        -> chunk and and perform operation on amount currently read memory
        -> when current data in memory's operations has completed call the next data point in the queue
        // will implement SQS queue in Amazon
        TODO:
          -> complete comments across function currently a place holder for what will be there
          -> maxPoint will be maximum amount of bytes for lambda function
          -> currentJob will be read into memory or sent to process.
          -> remaining will be sent to an SQSqueue
          -> when the job is complete call the next queue object
  */
  const maxPoint = 1024;
  let currentJob = values.slice(0, maxPoint).filter((v) => v);
  const currentInQueue = values.slice(maxPoint, values.length);
  while (currentInQueue.length > 0) {
    chunkArray(currentJob).forEach(async (job) => {
      await action.callable(job);
    });
    currentJob = currentInQueue.slice(0, maxPoint).filter((v) => v);
  }
};

export const largeArrayOperation = async <T>(
  values: [T[]],
  action: CallOperation<T>,
): Promise<[T[]]> => {
  /*
    function to perform an in-place operation on a large collection

    params:
     @values -> an already chunked array
     @action -> an interface containing an async function

    returns:
      @values Promise of array after function called on elements -> Promise<[T[]]>
  */
  const newValues = await Promise.all(
    values.map(async (arr: T[]) => {
      return await action.callable(arr);
    }),
  );

  return newValues as unknown as Promise<[T[]]>;
};

export const largeArrayOperationInPlace = async <T>(
  values: [T[]],
  action: CallOperation<T>,
): Promise<void> => {
  /*
      function to perform an in-place operation on a large collection

      params:
       @values -> an already chunked array
       @action -> an interface containing an async function
    */

  values.forEach(async (arr: T[]) => {
    await action.callable(arr);
  });
};

export const readFromPromise = <T>(values: Promise<[T[]]>): [T[]] => {
  /*
      params:
       @values -> an already chunked array inside a promise
      returns:
        @values -> returns the data outside of a promise
  */
  const unpackPromise = [] as unknown as [T[]];
  values.then(async (v) => {
    await unpackPromise.push([...v] as T[]);
  });

  return unpackPromise;
};

export const constUnpackChunkOperation = <T>(
  values: [T[]],
  action: CallOperation<T>,
): [T[]] => {
  /*
    parems:
      @values -> iterable of elements for function to be called on
      @action -> interface with the function wrapped inside
  */
  return readFromPromise(largeArrayOperation(values, action));
};
