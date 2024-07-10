import initMongoDBConnection from "./db/initMongoDBConnection.js";
import startServer from "./server.js";

const bootsrap = async () => {
  await initMongoDBConnection();
  startServer();
};

bootsrap();
