import { Topics } from './TopicsEnum'

export interface QuestionUpdated {
  topic: Topics.QuestionUpdated
  data: {
    id: string
    newViewerId: string
    updatedAt: Date
    version: number
  }
}
