/// <reference types="node" />
import { DataQuery } from 'models/models';
import { AppService } from '../../src/app.service';
export declare class DataClass {
    private readonly dataSettings;
    private readonly dbConnection;
    private readonly appServices;
    private static readonly dbConnection;
    fetchedData: DataQuery<Buffer>;
    constructor(appService: AppService);
    getData(): Buffer[] | undefined;
    fileToBufferArray(): Buffer[];
    chunkLargeFile(): [Buffer[]];
    encryptLargeFile(): string;
    decryptLargeFile(): string;
    getFileSize(): string;
}
