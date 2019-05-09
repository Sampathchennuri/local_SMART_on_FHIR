const express = require("express");
const app = express();
const path = require("path");
const config = require("./config");

const port = config.app.port;

app.use(express.static("src"));

//app.get("/", (req, res) => res.send("Welcome to SMART on FHIR"));

app.listen(port, () => console.log("Example app listening on port --> ", port));
