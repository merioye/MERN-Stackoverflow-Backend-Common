import { Topics } from './TopicsEnum'

export interface UserCreated {
  topic: Topics.UserCreated
  data: {
    id: string
    username: string
    avatar: {
      url: string
      cloudinaryId: string
    }
    createdAt: Date
    updatedAt: Date
    version: number
  }
}
