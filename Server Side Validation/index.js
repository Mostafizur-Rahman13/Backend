const express = require('express');
const useRoute = require('./Routes/userRoute');
const app = express();
const PORT = 3001;

app.get("/test", (req, res) => {
  res.send(`Server is Running..`)
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", useRoute);

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});