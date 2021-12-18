import express from 'express'
import config from 'config'
import { logger, loggerMiddleware } from './logger'

const server = express()
server.use(loggerMiddleware)
server.get('/healthcheck', (req, res) => {
  res.end('OK')
})

const { port } = config.get('api')

server.listen(port, () => {
  logger.info(`api listening on port ${port}`)
})
