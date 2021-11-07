import express from "express";
import { config } from "dotenv";
config();
import initializeDB from "./database/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await initializeDB();
  // eslint-disable-next-line no-console
  console.log(`Code running at port ${PORT}`);
});
