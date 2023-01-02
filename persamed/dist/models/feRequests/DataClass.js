"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataClass = void 0;
var DataSettings;
(function (DataSettings) {
    DataSettings["default"] = "default";
})(DataSettings || (DataSettings = {}));
class DataClass {
    constructor(appService) {
        this.dataSettings = DataSettings.default;
        this.dbConnection = null;
        this.appServices = appService;
        if (DataClass.dbConnection) {
            Object.defineProperty(this, 'fetchedData', {
                get() {
                    const dataQuery = {};
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
    getData() {
        return this.fetchedData.data ? this.fetchedData.data : [];
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
}
exports.DataClass = DataClass;
DataClass.dbConnection = process.env.POSTGRESQL || null;
//# sourceMappingURL=DataClass.js.map