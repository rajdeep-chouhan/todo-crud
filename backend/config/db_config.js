const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `DB Connection Success , ${conn.connection.name}`.bgGreen.black
    );
  } catch (error) {
    console.log(`DB Connection Failed ,${error.message}`.bgRed.black);
  }
};
module.exports = connectDB;
