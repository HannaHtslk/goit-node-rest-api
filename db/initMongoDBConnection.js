import mongoose from "mongoose";
import { DB_HOST } from "./config.js";

const initMongoDBConnection = async () => {
  try {
    await mongoose.connect(DB_HOST);

    console.log("Database connection successful");
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default initMongoDBConnection;
