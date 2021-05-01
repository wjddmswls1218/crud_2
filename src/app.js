import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import globalRouter from "./routers/globalRouter";
import connent from "../db";

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/assets")));
app.use("/", globalRouter);
connent();

app.listen(PORT, () => {
  console.log(`${PORT} Server Start`);
});
