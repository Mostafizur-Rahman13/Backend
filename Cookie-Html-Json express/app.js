const express = require("express");
const app = express();
const useRouter = require('./routes/users.routes');
const { clear } = require("console");

// app.use('/api/user', useRouter)

// app.use("/", (req, res) => {
//   res.statusCode = 200;
//   res.sendFile(__dirname + '/views/index.html')
// })

// app.use("/contact", (req, res) => {
//   res.statusCode = 200;
//   res.sendFile(__dirname + '/views/contact.html')
// })

// app.use("/about", (req, res) => {
//   res.status(200).json({
//     name: "Mostafiz",
//     StatusCode: 200,
//   })
//   // res.redirect('about-us')
// })

app.use("/login", (req, res) => {
  res.cookie("name", "Mostafiz");
  res.cookie("age", "24");
  res.clearCookie("name")
  res.append("id", "101")
  res.end();
})

app.use((req, res) => {
  res.send("<h1>404 this page not found</h1>")
})

module.exports = app;