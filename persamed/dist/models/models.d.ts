export interface OnFileReturn<T> {
    fileType: T | T[];
}
export interface CallOperation<T> {
    callable(arg: T[]): Promise<T[]>;
}
