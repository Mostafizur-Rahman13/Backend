const { v4: uuidv4 } = require('uuid');

const users =
  [
    {
      id: uuidv4(),
      name: 'Mostafizur Rahman',
      email: 'mostafiztarek@gmail.com'
    },
    {
      id: uuidv4(),
      name: 'Mushfiqur Rahman',
      email: 'Mushfiq@gmail.com'
    }
  ]

module.exports = users;