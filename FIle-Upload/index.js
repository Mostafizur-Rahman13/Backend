const express = require('express');
const app = express();
const PORT = 4000;
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
})


const upload = multer({ storage: storage })

app.get("/", (req, res) => {
  res.status(201).send(`Server is listening....`)
})

app.get("/register", (req, res) => {
  res.status(201).sendFile(__dirname + '/index.html');
})

app.post("/register", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.status(201).send('file is uploaded');
})

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
})