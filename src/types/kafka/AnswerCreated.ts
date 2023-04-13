import { Topics } from './TopicsEnum'
import { ReactionData } from './ReactionData'

export interface AnswerCreated {
  topic: Topics.AnswerCreated
  data: ReactionData
}
