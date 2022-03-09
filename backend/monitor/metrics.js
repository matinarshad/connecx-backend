const express = require("express");
const client = require("prom-client");
const cors = require("cors");
const app = express();
const checkToken = require("../middleware/validateToken");

module.exports = startMetricServer = () => {
  const collectDefaultMetrics = client.collectDefaultMetrics;
  collectDefaultMetrics();
  app.use(cors());
  app.post("/metrics", checkToken, async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    return res.send(await client.register.metrics());
  });

  app.listen(9100, () => {
    console.log("Metrics running at port 9100");
  });
};
