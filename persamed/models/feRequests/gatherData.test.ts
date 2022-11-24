import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DataClass } from './DataClass';

describe('gatherDataTest', () => {
  let DataClass: DataClass;

  beforeEach(async () => {
    const Data: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    DataClass = Data.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should fetch data from db', () => {
      expect(DataClass.getData()).toBe([]);
    });
  });
});
