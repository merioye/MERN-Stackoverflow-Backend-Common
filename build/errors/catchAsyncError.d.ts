import { Response, NextFunction, RequestHandler } from 'express';
import { CustomRequest } from '../types';
export declare const catchAsyncError: (passedFunction: RequestHandler) => (req: CustomRequest<{}>, res: Response, next: NextFunction) => void;
