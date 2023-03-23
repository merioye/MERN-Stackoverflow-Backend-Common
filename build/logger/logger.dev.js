"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const path_1 = __importDefault(require("path"));
const { timestamp, combine, printf, errors } = winston_1.format;
function buildDevLogger() {
    const logFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} [${level}]: ${stack || message}`;
    });
    return (0, winston_1.createLogger)({
        level: 'info',
        format: combine(winston_1.format.colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat),
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({
                filename: path_1.default.join(__dirname, '../../logs/error.log'),
                level: 'error',
            }),
            new winston_1.transports.File({ filename: path_1.default.join(__dirname, '../../logs/combined.log') }),
        ],
    });
}
exports.default = buildDevLogger;
//# sourceMappingURL=logger.dev.js.map