// Tittle : Uptime Monitoring Application
// Description : A RestFul Api Monitoring up or down time of user defined Links
// Author : Mostafizur Rahman
// Date : 18 jun 2024

// Dependencies
const http = require('http')

// App object-Module Scaffolding
const app = {}

// App Configuration
app.confiq = {
  port: 3000
}

// Create Server
app.createServer = () => {
  const server = http.createServer(handelingReqRes)
  server.listen(app.confiq.port, () => {
    console.log('lesening port 3000');
  })
}
// handling Request & Response
const handelingReqRes = (req, res) => {
  res.end('Hellow Nodejs')
}

// App Start Over here
app.createServer()

