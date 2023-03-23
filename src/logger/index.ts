import { Logger } from 'winston'

import buildDevLogger from './logger.dev'
import buildProdLogger from './logger.prod'

const NODE_ENV = process.env.NODE_ENV
let logger: Logger
if (NODE_ENV === 'development') {
  logger = buildDevLogger()
} else {
  logger = buildProdLogger()
}

export { logger }
