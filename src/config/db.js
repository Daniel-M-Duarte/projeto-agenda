const mongoose = require("mongoose");

const connectDataBase = () => {
    console.log('Wait connecting to the database');
  
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log('MongoDB Atlas Connected'))
      .catch((error) => console.log(error));
  };
  
  module.exports = connectDataBase;