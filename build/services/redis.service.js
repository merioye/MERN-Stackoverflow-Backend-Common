"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const redis_1 = require("redis");
const logger_1 = require("../logger");
class RedisService {
    constructor(redisUri) {
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
        });
        this.client = (0, redis_1.createClient)({ url: redisUri });
        this.client.on('error', (error) => {
            logger_1.logger.error('Error connecting to Redis: ', error);
        });
    }
}
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map