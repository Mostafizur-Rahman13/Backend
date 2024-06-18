const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(`${__dirname}/bigData.txt`);
  readStream.pipe(res);
});

server.listen(3000);
console.log('Server listening on port 3000');