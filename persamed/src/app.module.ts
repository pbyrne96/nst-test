import { Module } from '@nestjs/common';
import { DataQuery } from '../models';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'dotenv/config';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  private static readonly dbConnection: string | null =
    process.env.POSTGRESQL || null;
  public topLevelData: DataQuery<object>;
  // certain constructor elements will load a class fileData -> this will top level info with most being lazyLoaded
  constructor() {
    if (AppModule.dbConnection) {
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
}
