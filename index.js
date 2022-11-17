"use-strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

const referralRoutes = require("./routes/referral-routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", referralRoutes.routes);

/*
app.get("/descargar", (req, res) => {
  console.log("id: " + req.query.id);
});
*/

app.listen(config.port, () =>
  console.log("App is listening on url http://localhost:" + config.port)
);
