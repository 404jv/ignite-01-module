import http from 'node:http'

/*
- HTTP
  - Método HTTP
  - URL

GET, POST, PUT, PATCH, DELETE

1. Stateful - Stateless
2. JSON
3. Cabeçalhos da requisição e resposta
*/

const users = []

const server = http.createServer(async (request, response) => {
  const { method, url } = request
  if (method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  }
  if (method === 'POST' && url === '/users') {
    const buffers = []
    for await (const chunk of request) {
      buffers.push(chunk)
    }
    const body = JSON.parse(Buffer.concat(buffers).toString())
    const { name, email } = body
    users.push({
      id: 1,
      name,
      email,
    })
    return response.writeHead(201).end()
  }
  return response.writeHead(404).end()
})

server.listen(3333)
