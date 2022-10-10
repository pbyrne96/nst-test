export interface OnFileReturn<T> {
    fileType: T | T[];
}
export interface CallOperation<T> {
    callable(arg: T[]): Promise<T[]>;
}
export interface DataQuery<T> {
    success: boolean;
    returnSize: number;
    data?: T[];
}
