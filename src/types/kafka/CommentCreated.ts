import { ReactionData } from './ReactionData'
import { Topics } from './TopicsEnum'

export interface CommentCreated {
  topic: Topics.CommentCreated
  data: ReactionData
}
