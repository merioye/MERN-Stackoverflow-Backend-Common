import { CustomError, SerializedError } from './CustomError';
export declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): SerializedError[];
}
