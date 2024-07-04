import mongoose from "mongoose";

const initMongoDBConnection = async () => {
  try {
    const DB_HOST =
      "mongodb+srv://hannahhtslk:LjXWqAjp4eUajT48@cluster0.wxj0ri1.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0";

    await mongoose.connect(DB_HOST);

    console.log("Database connection successful");
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default initMongoDBConnection;
