const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {

  const handlefile = (fileLocation, code) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(code, { 'Content-text': 'text/html' });
      res.write(data);
      res.end();
    })
  }


  if (req.url === '/') {
    handlefile('home.html', 200)
  } else if (req.url === '/about') {
    handlefile('about.html', 200)
  } else if (req.url === '/contact') {
    handlefile('contact.html', 200)
  } else {
    handlefile('error.html', 404)
  }

})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
})