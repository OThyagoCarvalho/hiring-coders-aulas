const http = require('http');
const url = require('url');
const queryString = require('query-string');



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  // console.log(req.url); checking req.url structure
  const params = queryString.parse(url.parse(req.url, true).search)
  console.log(params)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});