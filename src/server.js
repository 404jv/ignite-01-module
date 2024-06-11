import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

/*
Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
http://localhost:3333/users?userId=1&name=jao

Route Parameters: Identificação de recurso
GET     http://localhost:3333/users/1
DELETE  http://localhost:3333/users/1
PUT     http://localhost:3333/users/1

Request Body: Envio de informações de um formulário (HTTPs)
POST http://localhost:3333/users
*/

const server = http.createServer(async (request, response) => {
  const { method, url } = request
  await json(request, response)
  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })
  if (route) {
    const routeParams = request.url.match(route.path)
    request.params = { ...routeParams.groups }
    return route.handler(request, response)
  }
  return response.writeHead(404).end()
})

server.listen(3333)
