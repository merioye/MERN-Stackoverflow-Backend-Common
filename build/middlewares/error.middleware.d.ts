import { NextFunction, Request, Response } from 'express';
import { SerializedError } from '../errors/CustomError';
interface ErrorResponse {
    errors: SerializedError[];
}
export declare const errorHandlerMiddleware: (err: Error, req: Request, res: Response, next: NextFunction) => Response<ErrorResponse>;
export {};
