import mongoose from "mongoose";

export const connectDB = async (uri) => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });
  await mongoose.connect(`${process.env.DB_URI}/e-commerce`);
};
