const express = require('express');
const app = express();
const path = require("path")
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})