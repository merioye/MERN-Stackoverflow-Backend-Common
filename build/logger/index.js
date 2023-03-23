"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger_dev_1 = __importDefault(require("./logger.dev"));
const logger_prod_1 = __importDefault(require("./logger.prod"));
const NODE_ENV = process.env.NODE_ENV;
let logger;
exports.logger = logger;
if (NODE_ENV === 'development') {
    exports.logger = logger = (0, logger_dev_1.default)();
}
else {
    exports.logger = logger = (0, logger_prod_1.default)();
}
//# sourceMappingURL=index.js.map