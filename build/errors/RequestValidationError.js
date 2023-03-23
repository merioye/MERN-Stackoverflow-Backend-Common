"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const CustomError_1 = require("./CustomError");
class RequestValidationError extends CustomError_1.CustomError {
    constructor(errors) {
        super('Bad Request');
        this.statusCode = 400;
        this.serializeErrors = () => {
            return this.errors.map((error) => {
                return { message: error.message, field: error.path[0] };
            });
        };
        this.errors = errors;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}
exports.RequestValidationError = RequestValidationError;
//# sourceMappingURL=RequestValidationError.js.map