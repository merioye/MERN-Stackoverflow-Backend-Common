import { Topics } from './TopicsEnum'

export interface QuestionDeleted {
  topic: Topics.QuestionDeleted
  data: {
    id: string
    version: number
  }
}
