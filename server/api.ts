import express from 'express'
import config from 'config'

const server = express()
const { port } = config.get('api')

server.listen(port, () => {
  console.log(`api listening on port ${port}`)
})
