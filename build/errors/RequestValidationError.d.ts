import { ValidationErrorItem } from 'joi';
import { CustomError, SerializedError } from './CustomError';
export declare class RequestValidationError extends CustomError {
    private errors;
    statusCode: number;
    constructor(errors: ValidationErrorItem[]);
    serializeErrors: () => SerializedError[];
}
