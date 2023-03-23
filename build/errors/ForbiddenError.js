"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const CustomError_1 = require("./CustomError");
class ForbiddenError extends CustomError_1.CustomError {
    constructor() {
        super('Action Forbidden');
        this.statusCode = 403;
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Action Forbidden' }];
    }
}
exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=ForbiddenError.js.map