"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const CustomError_1 = require("./CustomError");
class InternalServerError extends CustomError_1.CustomError {
    constructor() {
        super('Oops! Something went wrong');
        this.statusCode = 500;
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Oops! Something went wrong' }];
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map