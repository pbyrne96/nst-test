import { CallOperation } from './models';
export declare const getSizeOfArrayInBytes: <T extends object>(values: T[]) => number;
export declare const getOptimalChunkSize: () => number;
export declare const chunkArray: <T extends object>(values: T[]) => [T[]];
export declare const chunkLargeArrayAndPerformOperation: <T extends object>(values: T[], action: CallOperation<T>) => void;
export declare const largeArrayOperation: <T extends object>(values: [T[]], action: CallOperation<T>) => Promise<[T[]]>;
export declare const largeArrayOperationInPlace: <T extends object>(values: [T[]], action: CallOperation<T>) => Promise<void>;
export declare const readFromPromise: <T extends object>(values: Promise<[T[]]>) => [T[]];
export declare const constUnpackChunkOperation: <T extends object>(values: [T[]], action: CallOperation<T>) => [T[]];
