import { Kafka, Producer } from 'kafkajs'
import { Logger } from 'winston'
import { Event } from '../types'
import { sleep } from '../helpers'

export class KafkaProducer {
  private readonly kafka: Kafka
  private readonly producer: Producer
  private isConnected = false
  private readonly logger: Logger

  constructor(clientId: string, brokers: string[], logger: Logger) {
    this.kafka = new Kafka({ clientId, brokers })
    this.producer = this.kafka.producer({ allowAutoTopicCreation: true })
    this.logger = logger
  }

  produce = async <T extends Event>(topic: T['topic'], message: T['data']): Promise<void> => {
    if (!this.isConnected) {
      await this.connect()
    }
    const value = JSON.stringify(message)
    await this.producer.send({ topic, messages: [{ value }] })
    this.logger.info(`Message sent to Kafka-topic: ${topic}`, value)
  }

  connect = async (): Promise<void> => {
    try {
      await this.producer.connect()
      this.isConnected = true
    } catch (err) {
      this.logger.error('Failed to connect to kafka: ', err)
      await sleep(5000)
      await this.connect()
    }
  }

  disconnect = async (): Promise<void> => {
    await this.producer.disconnect()
    this.isConnected = false
  }
}
