const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require('../controller/userController');

const router = require('express').Router();

router.get("/:id", getOneUser);

router.get("/", getAllUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;