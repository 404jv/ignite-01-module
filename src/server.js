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

const server = http.createServer((request, response) => {
  const { method, url } = request
  if (method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  }
  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com'
    })
    return response.end('Criação de Usuários')
  }
  return response.end('Hello Ignite!')
})

server.listen(3333)
