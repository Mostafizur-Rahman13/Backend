const userRegister = (req, res) => {

  try {

    const { name, email, password, dob } = req.body;

    const newUser = {
      name,
      email,
      password,
      dob,
    }

    return res.status(201).json({
      message: 'user is created',
      newUser
    });
  } catch (error) {

    return res.json({
      message: error.message
    });
  }
}

const userLogin = (req, res) => {

  try {

    const { email, password } = req.body;

    if (email === 'mostafiz@gmail.com' && password === '3698') {
      return res.status(201).json({
        message: 'Successfully loggin',
      });
    } else {
      return res.status(200).json({
        message: 'loggin faild',
      });
    }

  } catch (error) {
    return res.json({
      message: error.message
    });
  }

}

module.exports = { userRegister, userLogin };