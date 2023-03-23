import { Secret, Algorithm } from 'jsonwebtoken';
interface Payload {
    userId: string;
}
interface JwtOptions {
    expiresIn: string;
    secret: Secret;
    algorithm: Algorithm;
}
interface JwtTokens {
    accessToken: string;
    refreshToken: string;
}
export declare class JwtService<T extends Payload> {
    generateTokens: (payload: T, accessTokenOptions: JwtOptions, refreshTokenOptions: JwtOptions) => JwtTokens;
    verifyToken: (token: string, secret: Secret) => T | null;
}
export {};
