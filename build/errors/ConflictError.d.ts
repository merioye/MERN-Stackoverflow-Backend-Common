import { CustomError, SerializedError } from './CustomError';
export declare class ConflictError extends CustomError {
    statusCode: number;
    constructor(message: string);
    serializeErrors(): SerializedError[];
}
