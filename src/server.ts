import express from "express";
import { config } from "dotenv";
config();
import initializeDB from "./database/config";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await initializeDB();
  // eslint-disable-next-line no-console
  console.log(`Code running at port ${PORT}`);
});
