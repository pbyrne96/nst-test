"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constUnpackChunkOperation = exports.readFromPromise = exports.largeArrayOperationInPlace = exports.largeArrayOperation = exports.chunkLargeArrayAndPerformOperation = exports.chunkArray = exports.getOptimalChunkSize = exports.findAvailableMemory = exports.getSizeOfArrayInBytes = void 0;
const os = require('os');
const getSizeOfArrayInBytes = (values) => {
    return JSON.stringify(values).replace(/[\[\]\,\"]/g, '').length;
};
exports.getSizeOfArrayInBytes = getSizeOfArrayInBytes;
const findAvailableMemory = (values) => {
    const arraySizeInBytes = (0, exports.getSizeOfArrayInBytes)(values);
    const freeMemory = os.freemem();
    if (arraySizeInBytes > Math.ceil(freeMemory / 2)) {
        return Math.ceil(freeMemory - arraySizeInBytes);
    }
    return arraySizeInBytes;
};
exports.findAvailableMemory = findAvailableMemory;
const getOptimalChunkSize = (values) => {
    const freeMemory = (0, exports.findAvailableMemory)(values);
    const chunkSize = Math.max(Math.floor(values.length / freeMemory), 1);
    return chunkSize >= 1 ? chunkSize : 6;
};
exports.getOptimalChunkSize = getOptimalChunkSize;
const chunkArray = (values) => {
    const chunkDepth = (0, exports.getOptimalChunkSize)(values);
    const chunks = (a) => Array.from(new Array(Math.ceil(a.length / chunkDepth)), (_, i) => a.slice(i * chunkDepth, i * chunkDepth + chunkDepth));
    return chunks(values);
};
exports.chunkArray = chunkArray;
const chunkLargeArrayAndPerformOperation = (values, action) => {
    const maxPoint = 1024;
    let currentJob = values.slice(0, maxPoint).filter((v) => v);
    const currentInQueue = values.slice(maxPoint, values.length);
    while (currentInQueue.length > 0) {
        (0, exports.chunkArray)(currentJob).forEach(async (job) => {
            await action.callable(job);
        });
        currentJob = currentInQueue.slice(0, maxPoint).filter((v) => v);
    }
};
exports.chunkLargeArrayAndPerformOperation = chunkLargeArrayAndPerformOperation;
const largeArrayOperation = async (values, action) => {
    const newValues = await Promise.all(values.map(async (arr) => {
        return await action.callable(arr);
    }));
    return newValues;
};
exports.largeArrayOperation = largeArrayOperation;
const largeArrayOperationInPlace = async (values, action) => {
    values.forEach(async (arr) => {
        await action.callable(arr);
    });
};
exports.largeArrayOperationInPlace = largeArrayOperationInPlace;
const readFromPromise = (values) => {
    const unpackPromise = [];
    values.then(async (v) => {
        await unpackPromise.push([...v]);
    });
    return unpackPromise;
};
exports.readFromPromise = readFromPromise;
const constUnpackChunkOperation = (values, action) => {
    return (0, exports.readFromPromise)((0, exports.largeArrayOperation)(values, action));
};
exports.constUnpackChunkOperation = constUnpackChunkOperation;
//# sourceMappingURL=optimizeUtils.js.map