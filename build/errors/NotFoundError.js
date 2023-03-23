"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const CustomError_1 = require("./CustomError");
class NotFoundError extends CustomError_1.CustomError {
    constructor(message) {
        super(message ? message : 'Not Found');
        this.statusCode = 404;
        this.serializeErrors = () => {
            return [{ message: this.message }];
        };
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map