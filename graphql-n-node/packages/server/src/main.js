import express from 'express'
import cors from 'cors'

const appServer = express()

appServer.use(cors());

appServer.get('/status', (_, res) => {
  res.send({
    status: 'Okay'
  })
})

const enableCors = cors({ origin: 'http://localhost:3000' })

appServer.options('/authenticate', enableCors)
appServer.post('/authenticate', enableCors, express.json(), (req, res) => {
  console.log('E-mail', req.body.email, 'Senha', req.body.password)
  res.send({
    Okay: true,
  })
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = parseInt(process.env.HOSTNAME) || '127.0.0.1'

appServer.listen(PORT, HOSTNAME, () => {
  console.log(HOSTNAME)
  console.log(`listening at http://${HOSTNAME}:${PORT}`)
})
