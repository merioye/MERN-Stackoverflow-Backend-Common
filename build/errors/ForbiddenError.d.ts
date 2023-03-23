import { CustomError, SerializedError } from './CustomError';
export declare class ForbiddenError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): SerializedError[];
}
