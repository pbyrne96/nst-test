import { DataQuery } from 'models/models';
import { AppService } from '../../src/app.service';

enum DataSettings {
  default = 'default',
}

export class DataClass {
  private readonly dataSettings: DataSettings = DataSettings.default;
  private readonly dbConnection: string | null = null;
  private readonly appServices: AppService;
  private static readonly dbConnection: string | null =
    process.env.POSTGRESQL || null;
  public fetchedData: DataQuery<Buffer>;

  constructor(appService: AppService) {
    this.appServices = appService;
    // certain constructor elements will load a class fileData -> this will top level info with most being lazyLoaded

    if (DataClass.dbConnection) {
      Object.defineProperty(this, 'fetchedData', {
        get() {
          const dataQuery = {}; // call to db
          Object.defineProperty(this, 'fetchedData', {
            value: dataQuery,
            writable: false,
            configurable: false,
          });
          return dataQuery;
        },
        configurable: true,
        enumerable: true,
      });
    }
  }

  getData(): Buffer[] | undefined {
    return this.fetchedData.data ? this.fetchedData.data : ([] as Buffer[]);
  }

  // Stating abstract methods
  private fileToBufferArray(): Buffer[] {
    return [] as Buffer[];
  }

  private chunkLargeFile(): [Buffer[]] {
    return [[]] as [Buffer[]];
  }

  private encryptLargeFile(): string {
    return '';
  }

  private decryptLargeFile(): string {
    return '';
  }

  private getFileSize(): string {
    return '';
  }
}
