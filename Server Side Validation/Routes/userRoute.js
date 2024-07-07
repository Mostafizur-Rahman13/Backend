const { registerUser, loginUser } = require('../controller/userController');
const { registerValidation, loginValidation } = require('../validation/auth');

const useRoute = require('express').Router();

useRoute.post("/reg", registerValidation, registerUser);

useRoute.post("/login", loginValidation, loginUser);

module.exports = useRoute;