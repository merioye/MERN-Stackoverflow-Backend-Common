import { Kafka, Consumer, EachMessagePayload } from 'kafkajs'
import { Event } from '../types'

export abstract class BaseKafkaConsumer<T extends Event> {
  protected kafka: Kafka
  protected consumer: Consumer
  abstract topic: T['topic']
  abstract groudId: string
  // eslint-disable-next-line
  abstract handleMessage(message: T['data']): Promise<void>

  constructor(kafka: Kafka) {
    this.kafka = kafka
  }

  async listen(): Promise<void> {
    this.consumer = this.kafka.consumer({ groupId: this.groudId })
    await this.consumer.connect()
    await this.consumer.subscribe({ topic: this.topic })
    await this.consumer.run({
      eachMessage: async ({ message }: EachMessagePayload) => {
        const messageValue = JSON.parse(message.value!.toString()) as T['data']
        console.log('Received message from Kafka:', messageValue)
        await this.handleMessage(messageValue)
      },
    })
  }
}
