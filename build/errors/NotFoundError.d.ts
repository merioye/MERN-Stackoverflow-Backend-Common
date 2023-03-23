import { CustomError, SerializedError } from './CustomError';
export declare class NotFoundError extends CustomError {
    statusCode: number;
    constructor(message?: string);
    serializeErrors: () => SerializedError[];
}
