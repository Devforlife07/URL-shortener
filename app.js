const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config({
  path: "./config/config.env"
});

const app = express();
app.set("view engine", "ejs");
//MongoDB Connection`
db.connection();

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
//serve static Assets
app.use(express.static("Public"));
//routes
app.use("/", (req, res) => {
  res.render("index");
});
app.use("/api/url", require("./routes/url"));
app.use("/", require("./routes/index"));

app.listen(process.env.PORT);
