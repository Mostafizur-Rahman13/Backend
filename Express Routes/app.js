const express = require("express");
const app = express();
const useRouter = require('./routes/users.routes');

app.use('/api/user', useRouter)

app.get("/", (req, res) => {
  res.send("<h1> I'm get Home at App</h1>")
})

app.use((req, res) => {
  res.send("<h1> 404 this page not found</h1>")
})


module.exports = app;