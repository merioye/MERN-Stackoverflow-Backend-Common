import { Topics } from './TopicsEnum'

export interface QuestionCreated {
  topic: Topics.QuestionCreated
  data: {
    id: string
    title: string
    body: string
    authorId: string
    questionViewersIds: string[]
    createdAt: Date
    updatedAt: Date
    version: number
  }
}
