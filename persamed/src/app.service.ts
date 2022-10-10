import { Injectable } from '@nestjs/common';
import { DataClass } from './app.gatherData';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFileData(): Buffer[] {
    const newObject = new DataClass(this).getData();
    return [] as Buffer[];
  }
}
