const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECT_STRING);
    console.log(
      "Database connected ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    ProcessingInstruction.exit(1);
  }
};

module.exports = connectDb;
