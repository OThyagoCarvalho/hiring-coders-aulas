const http = require('http');

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello JavaScript!');
})

server.listen(PORT, HOSTNAME, ()=> {
  console.log(`Server listening on http://${HOSTNAME}:${PORT}`)
})