const { userRegister, userLogin } = require('../controller/userController');
const runValidation = require('../validation');
const { userRegisterValidation, userLoginValidation } = require('../validation/auth');

const useRoute = require('express').Router();

useRoute.post("/reg", userRegisterValidation, runValidation, userRegister);

useRoute.post("/login", userLoginValidation, runValidation, userLogin);

module.exports = useRoute;