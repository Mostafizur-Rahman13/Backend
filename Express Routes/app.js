const express = require("express");
const app = express();
const useRouter = require('./routes/users.routes');

// app.use('/api/user', useRouter)

app.use(express.json())

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.send('Im home post request')
})

app.use((req, res) => {
  res.send("<h1> 404 this page not found</h1>")
})


module.exports = app;