import { Kafka, Consumer, EachMessagePayload } from 'kafkajs'
import { Event } from '../types'

export interface MessageHandlerParams<T extends { data: any }> {
  message: T['data']
  topic: string
  partition: number
  offset: string
}
export abstract class BaseKafkaConsumer<T extends Event> {
  protected kafka: Kafka
  protected consumer: Consumer
  abstract topic: T['topic']
  abstract groudId: string
  // eslint-disable-next-line
  abstract handleMessage(params: MessageHandlerParams<T>): Promise<void>

  constructor(kafka: Kafka) {
    this.kafka = kafka
  }

  async listen(): Promise<void> {
    this.consumer = this.kafka.consumer({
      groupId: this.groudId,
      maxInFlightRequests: 1,
      sessionTimeout: 30000,
      maxWaitTimeInMs: 1000,
      retry: {
        maxRetryTime: 60000,
        initialRetryTime: 1000,
        retries: 10,
      },
    })
    await this.consumer.connect()
    await this.consumer.subscribe({ topic: this.topic, fromBeginning: true })
    await this.consumer.run({
      autoCommit: false,
      eachMessage: async ({ message, topic, partition }: EachMessagePayload) => {
        const messageValue = JSON.parse(message.value!.toString()) as T['data']
        console.log(`Received message from Kafka-topic: ${this.topic}`, messageValue)

        await this.handleMessage({
          message: messageValue,
          topic,
          partition,
          offset: (Number(message.offset) + 1).toString(),
        })
      },
    })
  }
}
