const app = require('express');
const router = app.Router()


router.get("/login", (req, res) => {
  res.send("<h1>Im get Login at Route</h1>")
})
router.get("/about", (req, res) => {
  res.send("<h1>Im get About at Route</h1>")
})
router.get("/contact", (req, res) => {
  res.send("<h1>Im get Contact at Route</h1>")
})

module.exports = router;