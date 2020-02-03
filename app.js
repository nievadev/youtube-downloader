const express = require("express");
const path = require("path");
const app = express();

const indexRouter = require("./routes/index.js");

app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "hjs");

app.listen(3000, () => console.log("Listening at 3000!"));
