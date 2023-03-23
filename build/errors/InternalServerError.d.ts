import { CustomError, SerializedError } from './CustomError';
export declare class InternalServerError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): SerializedError[];
}
