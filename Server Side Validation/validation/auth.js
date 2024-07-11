const { check } = require("express-validator")

const userRegisterValidation = [

  check("name")
    .trim()
    .notEmpty()
    .withMessage('Name is missing')
    .isLength({ min: 4 })
    .withMessage(`Name character have at least 4 character`)
    .isLength({ max: 10 })
    .withMessage(`Name character maximum 10 character`),
  check("email")
    .trim()
    .notEmpty()
    .withMessage(`Email is missing`)
    .isEmail()
    .withMessage(`Email is not valid`),
  check("password")
    .trim()
    .notEmpty()
    .withMessage(`Password is missing`)
    .isLength({ min: 4 })
    .withMessage(`Password character have at least 4 character`),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage(`Date of birth is missing`)
    .isISO8601()
    .toDate()
    .withMessage(`Date of birth is not valid`),
]

const userLoginValidation = [

  check("email")
    .trim()
    .notEmpty()
    .withMessage(`Email is missing`)
    .isEmail()
    .withMessage(`Email is not valid`),
  check("password")
    .trim()
    .notEmpty()
    .withMessage(`Password is missing`)
    .isLength({ min: 4 })
    .withMessage(`Password character have at least 4 character`),

]

module.exports = { userLoginValidation, userRegisterValidation }