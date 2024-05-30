import app from "./config/app";
import { Config } from "./config/config";

const startServer = () => {
  const port = Config.port;

  try {
    app.listen(port, () => {
      console.log("Hello");
      console.log(`Listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
