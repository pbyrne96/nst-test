/// <reference types="node" />
import { AppService } from './app.service';
export declare class DataClass {
    private readonly appService;
    private readonly dataSettings;
    private readonly dbConnection;
    private readonly appServices;
    constructor(appService: AppService);
    getData(): Buffer[] | undefined;
    private fileToBufferArray;
    private chunkLargeFile;
    private encryptLargeFile;
    private decryptLargeFile;
    private getFileSize;
}
