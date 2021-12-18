import express from 'express'

const server = express()
const port = 6668

server.listen(port, () => {
  console.log(`api listening on port ${port}`)
})
