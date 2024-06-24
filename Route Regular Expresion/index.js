const express = require('express');
const app = express();
const PORT = 3000;

app.get("/product/:id([0-9]+)", (req, res) => {
  const id = req.params.id
  res.send(`<h1> Id = ${id}</h1>`);
})

// app.get("/product/:id([0-9]{3})", (req, res) => {
//   const id = req.params.id
//   res.send(`<h1> Id = ${id}</h1>`);
// })

app.get("/product/:title([a-zA-Z0-9]+)", (req, res) => {
  const title = req.params.title
  res.send(`<h1> Id = ${title}</h1>`);
})


app.get("*", (req, res) => {
  res.send(`<h1>404 page is not found </h1>`);
})

app.listen(PORT, () => {
  console.log(`Server is lisening at http://localhost:${PORT}`);
})