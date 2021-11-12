const express = require("express");
const app = express();
const fs = require("fs");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const PORT = 4000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cyf_ecommerce",
  password: "idkfaiddqd",
  port: 5432,
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Welcome to the Ecommerce application.");
});

app.listen(PORT, () => console.log(`listening to ${PORT}`));
