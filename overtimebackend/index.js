const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const app = express();
const port = process.env.PORT || 3002;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(cors());
require("dotenv").config();

// Routes
const userroute = require("./routes/userroute");
const overtimeroute = require("./routes/overtimeroute");

app.get("/overtimebackend/myapp/api", (req, res) => {
  res.status(200).send("Welcome to overtime Api");
});

app.use("/overtimebackend/myapp/api", userroute);
app.use("/overtimebackend/myapp/api", overtimeroute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
