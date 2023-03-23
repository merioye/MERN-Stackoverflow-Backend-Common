import { RedisClientType } from 'redis';
export declare class RedisService {
    client: RedisClientType;
    constructor(redisUri: string);
    connect: () => Promise<void>;
}
