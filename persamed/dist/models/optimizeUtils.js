"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constUnpackChunkOperation = exports.readFromPromise = exports.largeArrayOperationInPlace = exports.largeArrayOperation = exports.chunkArray = void 0;
const getOptimalChunkSize = (values) => {
    [...values];
    return 6;
};
const chunkArray = (values) => {
    const chunkDepth = getOptimalChunkSize(values);
    const chunks = (a) => Array.from(new Array(Math.ceil(a.length / chunkDepth)), (_, i) => a.slice(i * chunkDepth, i * chunkDepth + chunkDepth));
    return chunks(values);
};
exports.chunkArray = chunkArray;
const largeArrayOperation = async (values, action) => {
    const newValues = await Promise.all(values.map(async (arr) => {
        return await action.callable(arr);
    }));
    return newValues;
};
exports.largeArrayOperation = largeArrayOperation;
const largeArrayOperationInPlace = async (values, action) => {
    await values.forEach(async (arr) => {
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