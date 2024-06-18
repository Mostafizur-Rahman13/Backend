const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('HOME Page')
    res.end();
  } else if (req.url === '/about') {
    res.write('ABOUT Page')
    res.end();
  } else {
    res.write('NOT Found Page')
    res.end()
  }
})

server.listen(3000)
console.log('Server listening 3000');

