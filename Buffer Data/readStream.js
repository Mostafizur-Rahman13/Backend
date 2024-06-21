const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {

    res.write('<html><head><title>Nodejs</title></head>');

    res.write('<body><form method="post" action="/about"> <input name="message" /></form></body >');

    res.end();

  } else if (req.url === '/about' && req.method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    })

    req.on('end', () => {
      console.log('stream finished');
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      res.write('Thank you for submitting');
      res.end();
    })

  } else {
    res.write('NOT Found Page')
    res.end()
  }
})

server.listen(3000)
console.log('Server listening 3000');

