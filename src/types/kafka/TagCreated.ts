import { Topics } from './TopicsEnum'

export interface TagCreated {
  topic: Topics.TagCreated
  data: {
    id: string
    name: string
    questionsIds: string[]
    createdAt: Date
    updatedAt: Date
    version: number
  }
}
