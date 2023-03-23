"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const CustomError_1 = require("../errors/CustomError");
const errorHandlerMiddleware = (err, req, // eslint-disable-line
res, next) => {
    if (err instanceof CustomError_1.CustomError) {
        return res.status(err.statusCode).json({
            errors: err.serializeErrors(),
        });
    }
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            errors: [{ message: 'Invalid token...' }],
        });
    }
    return res.status(500).json({
        errors: [{ message: 'Oops! Something went wrong' }],
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
//# sourceMappingURL=error.middleware.js.map