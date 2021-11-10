/* eslint-disable no-console */
import mongoose from "mongoose";

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

const coneectDb = async () => {
  const mongodbURI =
    process.env.NODE_ENV === "production"
      ? process.env.MONGODB_URI
      : `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

  try {
    await mongoose.connect(
      mongodbURI!,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Database connected!!");
  } catch (e) {
    console.error(e);
    console.log("Failed to connect on the databse");
  }
};

export default coneectDb;
