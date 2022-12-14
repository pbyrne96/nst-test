import { CallOperation } from '../models';
export declare const getSizeOfArrayInBytes: <T>(values: T[]) => number;
export declare const findAvailableMemory: <T>(values: T[]) => number;
export declare const getOptimalChunkSize: <T>(values: T[]) => number;
export declare const chunkArray: <T>(values: T[]) => [T[]];
export declare const chunkLargeArrayAndPerformOperation: <T>(values: T[], action: CallOperation<T>) => void;
export declare const largeArrayOperation: <T>(values: [T[]], action: CallOperation<T>) => Promise<[T[]]>;
export declare const largeArrayOperationInPlace: <T>(values: [T[]], action: CallOperation<T>) => Promise<void>;
export declare const readFromPromise: <T>(values: Promise<[T[]]>) => [T[]];
export declare const constUnpackChunkOperation: <T>(values: [T[]], action: CallOperation<T>) => [T[]];
