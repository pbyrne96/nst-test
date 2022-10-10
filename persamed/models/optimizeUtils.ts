import { CallOperation } from './models';

const getOptimalChunkSize = <T extends object>(values: T[]): number => {
  /*
    Function for returning the optimal chunk size for a given input
  */
  [...values];
  return 6;
};

export const chunkArray = <T extends object>(values: T[]): T[] => {
  /*
    takes in a generic Array and returns a chunked version of the Array
    so if input is [1,2,3,....,inf]
    it will return
    [
        [1,2,3], [....], [inf]
    ]
  */
  const chunkDepth = getOptimalChunkSize(values);
  const chunks = (a: T[]) =>
    Array.from(new Array(Math.ceil(a.length / chunkDepth)), (_, i) =>
      a.slice(i * chunkDepth, i * chunkDepth + chunkDepth),
    );
  return chunks(values) as T[];
};

export const largeArrayOperation = async <T extends object>(
  values: [T[]],
  action: CallOperation<T>,
): Promise<[T[]]> => {
  /*
    function to perform an in-place operation on a large collection

    params:
     @values -> an already chunked array
     @action -> an interface containing an async function
  */
  const newValues = await Promise.all(
    values.map(async (arr: T[]) => {
      return await action.callable(arr);
    }),
  );

  return newValues as unknown as Promise<[T[]]>;
};

export const largeArrayOperationInPlace = async <T extends object>(
  values: [T[]],
  action: CallOperation<T>,
): Promise<void> => {
  /*
      function to perform an in-place operation on a large collection

      params:
       @values -> an already chunked array
       @action -> an interface containing an async function
    */

  await values.forEach(async (arr: T[]) => {
    await action.callable(arr);
  });
};

export const readFromPromise = <T extends object>(
  values: Promise<[T[]]>,
): [T[]] => {
  const unpackPromise = [] as unknown as [T[]];
  values.then(async (v) => {
    await unpackPromise.push([...v] as T[]);
  });

  return unpackPromise;
};

export const constUnpackChunkOperation = <T extends object>(
  values: [T[]],
  action: CallOperation<T>,
): [T[]] => {
  return readFromPromise(largeArrayOperation(values, action));
};
