"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataClass = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
var DataSettings;
(function (DataSettings) {
    DataSettings["default"] = "default";
})(DataSettings || (DataSettings = {}));
let DataClass = class DataClass {
    constructor(appService) {
        this.appService = appService;
        this.dataSettings = DataSettings.default;
        this.dbConnection = null;
        this.appService = appService;
    }
    getData() {
        return [];
    }
    fileToBufferArray() {
        return [];
    }
    chunkLargeFile() {
        return [[]];
    }
    encryptLargeFile() {
        return '';
    }
    decryptLargeFile() {
        return '';
    }
    getFileSize() {
        return '';
    }
};
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DataClass.prototype, "getData", null);
DataClass = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], DataClass);
exports.DataClass = DataClass;
//# sourceMappingURL=app.gatherData.js.map