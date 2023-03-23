"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    constructor() {
        this.generateTokens = (payload, accessTokenOptions, refreshTokenOptions) => {
            const accessToken = jsonwebtoken_1.default.sign(payload, accessTokenOptions.secret, {
                expiresIn: accessTokenOptions.expiresIn,
                algorithm: refreshTokenOptions.algorithm,
            });
            const refreshToken = jsonwebtoken_1.default.sign(payload, refreshTokenOptions.secret, {
                expiresIn: refreshTokenOptions.expiresIn,
                algorithm: refreshTokenOptions.algorithm,
            });
            return { accessToken, refreshToken };
        };
        this.verifyToken = (token, secret) => {
            try {
                const payload = jsonwebtoken_1.default.verify(token, secret);
                return payload;
            }
            catch (e) {
                return null;
            }
        };
    }
}
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map