import { Topics } from '../types'

export const topicsList = {
  create: Object.values(Topics).filter((v) => isNaN(Number(v))),
  delete: [],
}
