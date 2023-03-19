import { randomUUID } from 'node:crypto'
import { createServer } from 'node:http'

const serverId = randomUUID()

const server = createServer((req, res) => { res.end('Hello from ' + serverId) })

server.listen(8080, () => { console.log('Server listening on PORT: 8080') })