"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitBroker = void 0;
class InitBroker {
    constructor(queueConfig) {
        this.queueConfig = null;
        this.taskQueue = new Set();
        this.queueConfig = queueConfig;
    }
    sendJobToQueue() {
        return false;
    }
    requestNode() {
        return {
            addr: '',
            jobId: '-1',
        };
    }
    addToTaskQueue(task) {
        return false;
    }
}
exports.InitBroker = InitBroker;
//# sourceMappingURL=InitBrokerRequest.js.map