/// <reference types="node" />
import { AppService } from './app.service';
export declare class DataClass {
    private readonly appService;
    private readonly dataSettings;
    private readonly dbConnection;
    constructor(appService: AppService);
    getData(): Buffer[] | undefined;
    private fileToBufferArray;
    private chunkLargeFile;
    private encryptLargeFile;
    private getFileSize;
}
