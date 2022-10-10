import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

enum DataSettings {
  default = 'default',
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class DataClass {
  private readonly dataSettings: DataSettings = DataSettings.default;
  private readonly dbConnection: string | null = null;
  private readonly appServices: AppService;

  constructor(private readonly appService: AppService) {
    this.appService = appService;
  }

  @Get('data')
  getData(): Buffer[] | undefined {
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
