import { Admin } from 'kafkajs'
import { topicsList } from '../kafka'

type CreateTopicsParams = {
  numPartitions: number
  replicationFactor: number
  kafkaAdmin: Admin
}
class TopicsService {
  createTopics = async ({ numPartitions, replicationFactor, kafkaAdmin }: CreateTopicsParams) => {
    await kafkaAdmin.connect()

    const existingTopics = await kafkaAdmin.listTopics()
    const newTopics = topicsList.create.filter((t) => !existingTopics.includes(t))
    const deletionTopics = topicsList.delete.filter((t) => existingTopics.includes(t))

    if (newTopics.length > 0) {
      await kafkaAdmin.createTopics({
        topics: newTopics.map((topic) => ({
          topic,
          numPartitions: numPartitions,
          replicationFactor: replicationFactor,
          configEntries: [{ name: 'min.insync.replicas', value: '2' }],
        })),
      })
    }

    if (deletionTopics.length > 0) {
      await kafkaAdmin.deleteTopics({ topics: deletionTopics })
    }

    await kafkaAdmin.disconnect()
  }
}

export const topicsService = new TopicsService()
