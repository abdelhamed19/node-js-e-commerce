const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_SERVE);
  } catch (error) {
    process.exit(1); 
  }
};
module.exports = {connectDB};