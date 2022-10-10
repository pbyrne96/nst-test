/// <reference types="node" />
import { DataQuery } from 'models/models';
import { AppService } from '../src/app.service';
export declare class DataClass {
    private readonly appService;
    private readonly dataSettings;
    private readonly dbConnection;
    private readonly appServices;
    private static readonly dbConnection;
    topLevelData: DataQuery<object>;
    constructor(appService: AppService);
    getData(): Buffer[] | undefined;
    private fileToBufferArray;
    private chunkLargeFile;
    private encryptLargeFile;
    private decryptLargeFile;
    private getFileSize;
}
