export declare const chunkArray: <T extends object>(values: T[]) => T[];
export interface CallOperation<T> {
    callable(arg: T[]): Promise<T[]>;
}
export declare const largeArrayOperation: <T extends object>(values: [T[]], action: CallOperation<T>) => Promise<[T[]]>;
export declare const largeArrayOperationInPlace: <T extends object>(values: [T[]], action: CallOperation<T>) => Promise<void>;
export declare const readFromPromise: <T extends object>(values: Promise<[T[]]>) => [T[]];
