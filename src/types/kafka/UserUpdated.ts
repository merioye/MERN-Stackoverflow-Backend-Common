import { Topics } from './TopicsEnum'

export interface UserUpdated {
  topic: Topics.UserUpdated
  data: {
    id: string
    newViewerId: string
    updatedAt: Date
    version: number
  }
}
