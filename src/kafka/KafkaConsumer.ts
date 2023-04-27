import { Consumer, Kafka, ConsumerConfig } from 'kafkajs'
import { Logger } from 'winston'
import { Event } from '../types'
import { sleep } from '../helpers'

export class KafkaConsumer {
  private readonly kafka: Kafka
  private readonly consumer: Consumer
  private isConnected = false
  // private readonly groupId: string
  private readonly logger: Logger

  constructor(
    clientId: string,
    brokers: string[],
    groupId: string,
    consumerConfig: ConsumerConfig,
    logger: Logger,
  ) {
    this.kafka = new Kafka({ clientId, brokers })
    // this.groupId = groupId
    // this.consumer = this.kafka.consumer({
    //   groupId: this.groupId,
    //   allowAutoTopicCreation: true,
    //   maxInFlightRequests: 1,
    //   sessionTimeout: 30000,
    //   maxWaitTimeInMs: 1000,
    //   retry: {
    //     maxRetryTime: 60000,
    //     initialRetryTime: 1000,
    //     retries: 10,
    //   },
    // })
    this.consumer = this.kafka.consumer(consumerConfig)
    this.logger = logger
  }

  consume = async <T extends Event>(
    topic: T['topic'],
    handleMessage: (message: T['data']) => Promise<void>, // eslint-disable-line
  ) => {
    if (!this.isConnected) {
      await this.connect()
    }
    await this.consumer.subscribe({ topic, fromBeginning: true })
    await this.consumer.run({
      autoCommit: false,
      eachMessage: async ({ message, topic, partition }) => {
        try {
          const messageValue = JSON.parse(message.value!.toString()) as T['data']
          console.log(`Received message from Kafka-topic: ${topic}`, messageValue)

          await handleMessage({
            message: messageValue,
          })

          await this.consumer.commitOffsets([
            { topic, partition, offset: (Number(message.offset) + 1).toString() },
          ])
        } catch (err) {
          this.logger.error(`Error while consuming message from kafka-topic: ${topic}`, err)
        }
      },
    })
  }

  connect = async () => {
    try {
      await this.consumer.connect()
      this.isConnected = true
    } catch (err) {
      this.logger.error('Failed to connect to kafka: ', err)
      await sleep(5000)
      await this.connect()
    }
  }

  disconnect = async () => {
    await this.consumer.disconnect()
    this.isConnected = false
  }
}
