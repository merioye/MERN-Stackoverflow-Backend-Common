import { Producer, Kafka } from 'kafkajs'
import { Event } from '../types'

export abstract class BaseKafkaProducer<T extends Event> {
  protected kafka: Kafka
  protected producer: Producer
  abstract topic: T['topic']

  constructor(kafka: Kafka) {
    this.kafka = kafka
  }

  async sendMessage(message: T['data']): Promise<void> {
    if (!this.producer) {
      this.producer = this.kafka.producer({ allowAutoTopicCreation: true })
      await this.producer.connect()
    }
    const value = JSON.stringify(message)
    await this.producer.send({ topic: this.topic, messages: [{ value }] })
    console.log('Message sent to Kafka:', value)
  }
}
