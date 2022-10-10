"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example = {
    get data() {
        const _data = {};
        Object.defineProperty(this, 'data', {
            value: _data,
            writable: false,
            configurable: false,
            enumerable: false,
        });
        return _data;
    },
};
//# sourceMappingURL=models.js.map