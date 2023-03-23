import { RedisClientType, createClient } from 'redis'
import { logger } from '../logger'

export class RedisService {
  client: RedisClientType

  constructor(redisUri: string) {
    this.client = createClient({ url: redisUri })
    this.client.on('error', (error) => {
      logger.error('Error connecting to Redis: ', error)
    })
  }

  connect = async (): Promise<void> => {
    await this.client.connect()
  }
}
