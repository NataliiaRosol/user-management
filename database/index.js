import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://admin:admin@cluster0.yy1sy.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;