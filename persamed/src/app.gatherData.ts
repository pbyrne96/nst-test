import { Get, Module } from '@nestjs/common';
import { DataQuery } from 'models/models';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';

enum DataSettings {
  default = 'default',
}

@Module({
  imports: [AppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class DataClass {
  private readonly dataSettings: DataSettings = DataSettings.default;
  private readonly dbConnection: string | null = null;
  private readonly appServices: AppService;
  private static readonly dbConnection: string | null =
    process.env.POSTGRESQL || null;
  public topLevelData: DataQuery<object>;

  constructor(private readonly appService: AppService) {
    this.appServices = appService;
    // certain constructor elements will load a class fileData -> this will top level info with most being lazyLoaded

    if (DataClass.dbConnection) {
      Object.defineProperty(this, 'data', {
        get() {
          const dataQuery = {}; // call to db
          Object.defineProperty(this, 'data', {
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

  @Get('data')
  getData(): Buffer[] | undefined {
    this.appServices.getFileData();
    return [] as Buffer[];
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
