const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const response = require('../helpers/BaseResponse');

exports.register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return response.failResponse(res, 400, 'User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ first_name, last_name, email, password: hashedPassword });

    return response.successResponse(res, user, 200);
  } catch (error) {
    return response.failResponse(res, 400, error.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return response.failResponse(res, 400, 'User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) return response.failResponse(res, 400, 'Invalid credentials');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    const data = { token, user: { id: user._id, name: user.first_name + ' ' + user.last_name, email: user.email } };
    return response.successResponse(res, data, 200);
  } catch (error) {
    return response.failResponse(res, 400, error.message);
  }
};
