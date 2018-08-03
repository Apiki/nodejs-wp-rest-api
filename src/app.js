import http from 'http'
import { env, port, ip, apiRoot } from './config'
import express from './services/express'
import api from './api'

const app = express(apiRoot, api)
const server = http.createServer(app)

app.use((err, req, res, next) => {
  console.error(err.stack, res.status)
  res.status(res.status).send(res.json)
})

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
