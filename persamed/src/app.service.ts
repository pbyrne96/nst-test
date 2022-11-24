import { Injectable } from '@nestjs/common';
import { DataClass } from '../models/feRequests/DataClass';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFileData(): Buffer[] {
    new DataClass(this).getData();
    return [] as Buffer[];
  }
}
