const express = require("express");
const router = require("./routes");
const cors = require("cors");
const startMetricServer = require("./monitor/metrics");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  startMetricServer();
});
