const http = require('http');
const testModule = require('./testModule');
const casual = require('casual');

const hostname = '127.0.0.1';
const port = 2000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
  res.end(casual.sentence);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});