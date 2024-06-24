const express = require('express');
const app = express();
const PORT = 3001;

// Query Parameter Pass..........

// ?name=mostafiz&id=102   input pattent
// app.get("/", (req, res) => {
//   const { name, id } = req.query
//   res.send(`<h1> My name is  ${name} and student ${id} </h1>`);
// })

// Route Parameter Pass............

// userID / 1011 / userName / mostafizur  input pattent
app.get("/user/userID/:id/userName/:name", (req, res) => {
  const { name, id } = req.params
  res.send(`<h1> My name is  ${name} and student ${id} </h1>`);
})

// Queary Parameter From Header

// thunder or postman header key value
// app.get("/", (req, res) => {
//   const name = req.header('name');
//   const id = req.header('id');
//   res.send(`<h1> My name is  ${name} and student ${id} </h1>`);
// })


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})
