"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_controller_1 = require("../../src/app.controller");
const app_service_1 = require("../../src/app.service");
describe('gatherDataTest', () => {
    let DataClass;
    beforeEach(async () => {
        const Data = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        }).compile();
        DataClass = Data.get(app_controller_1.AppController);
    });
    describe('root', () => {
        it('should fetch data from db', () => {
            expect(DataClass.getData()).toBe([]);
        });
    });
});
//# sourceMappingURL=gatherData.test.js.map