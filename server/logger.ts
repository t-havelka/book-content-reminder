import config from 'config'
import expressLogger from 'express-pino-logger'
import pino, { Bindings } from 'pino'

const pinoLogger = pino({
  ...config.get('logger'),
  transport: {
    target: 'pino-pretty'
  }
})

const createLogger = (props: Bindings = {}) => {
  const driver = pinoLogger.child(props)

  return {
    driver,
    debug: (message: string) => driver.debug(message),
    info: (message: string) => driver.info(message),
    warn: (message: string) => driver.warn(message),
    error: (message: string) => driver.error(message),
    fatal: (message: string) => driver.fatal(message)
  }
}

const logger = createLogger()

const loggerMiddleware = expressLogger({
  logger: logger.driver,
  level: config.get('logger.level')
})

export { logger, loggerMiddleware }
