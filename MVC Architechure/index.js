const express = require('express');
const useRouter = require('./routes/usersRoute');

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.use(useRouter);

app.use((req, res, next) => {
  res.status(400).json({
    message: `Resourse not found`
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
});