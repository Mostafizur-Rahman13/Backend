const express = require('express');
const app = express();
const PORT = 3000;


const middleware = (req, res, next) => {
  console.log(`Middleware function`);
  req.curTime = new Date(Date.now());
  next();
}

app.use(middleware)

// app.get("/", middleware, (req, res) => {
//   console.log(`Im From Home Route ${req.curTime}`);
//   res.send(`<h1> Im From Home Page </h1>`)
// });

app.get("/", (req, res) => {
  console.log(`Im From Home Route ${req.curTime}`);
  res.send(`<h1> Im From Home Page </h1>`)
});

app.get("/login", (req, res) => {
  console.log(`Im From Home Route ${req.curTime}`);
  res.send(`<h1> Im From Home Page </h1>`)
});

app.use((req, res) => {
  res.send(`<h1> 404 bed url request</h1>`)
});

// app.use((err, req, res, next) => {
//   res.status(500).send(`<h1> 404 not find</h1>`)
// });


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}}`);
})