const express = require("express");
const app = express()

app.get("/", (req, res) => {
  res.send('Im get from at home')
})
app.post("/post", (req, res) => {
  res.end("Im post from at home")
})
app.put("/put", (req, res) => {
  res.end("Im put from at home")
})
app.delete("/delete", (req, res) => {
  res.end("Im delete from at home")
})

module.exports = app