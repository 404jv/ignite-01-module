import http from 'node:http'

/*
- HTTP
  - Método HTTP
  - URL

GET, POST, PUT, PATCH, DELETE
*/

const server = http.createServer((request, response) => {
  const { method, url } = request
  if (method === 'GET' && url === '/users') {
    return response.end('Listagem de Usuários')
  }
  if (method === 'POST' && url === '/users') {
    return response.end('Criação de Usuários')
  }
  return response.end('Hello Ignite!')
})

server.listen(3333)
