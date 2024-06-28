let users = require('../model/userModel')
const { v4: uuidv4 } = require('uuid')

const getAllUsers = (req, res) => {
  res.status(200).json({ users })
}

const createUsers = (req, res) => {

  const newUsers = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUsers);
  res.status(200).json({ users });
}

const updateUsers = (req, res) => {

  const userId = req.params.id;
  const { name, email } = req.body;

  users.filter((user) => user.id === userId).map((selectedUser) => {

    selectedUser.name = name;
    selectedUser.email = email;

  })

  res.status(200).json({ users })
}

const deleteUsers = (req, res) => {

  const userId = req.params.id;

  users = users.filter((user) => user.id !== userId)

  res.status(200).json({ users })
}

module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers };