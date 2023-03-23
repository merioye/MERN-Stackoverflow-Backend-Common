import { CustomError, SerializedError } from './CustomError';
export declare class NotAuthorizedError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): SerializedError[];
}
