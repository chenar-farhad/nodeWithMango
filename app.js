import bodyParser from "body-parser";
import express from "express";
import Mangoose from "mongoose";
import router from "./src/routes/routes.js";

async function main() {
  const port = 5000;
  const url = "mongodb://localhost:27017/commerce_db";
  const app = express();
  await Mangoose.connect(url);

  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(router);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
main();
