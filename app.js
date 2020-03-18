const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");
const morgan = require("morgan");
const ej = require("express-ejs-layouts");
const path = require("path")

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
app.use(ej);

//morgan
app.use(morgan("tiny"));
//serve static Assets
app.use(express.static(path.join(__dirname, "Public")));
//routes

app.get("/", (req, res) => {
    res.render("def")
})
app.use("/api/url", require("./routes/url"));
app.use("/", require("./routes/index"));
app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(process.env.PORT);