const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://Nagalakshman:Naruto@cluster0.3polywm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
