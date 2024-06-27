const users = require('../controller/model/usersModel')
const path = require('path');

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname, '/../views/index.html'));
}

exports.saveUsers = (req, res) => {

  const fname = req.body.fname;
  const lname = req.body.lname;

  const user = {
    fname,
    lname,
  };

  users.push(user)

  res.status(201).json({
    success: true,
    users,
  });
};


