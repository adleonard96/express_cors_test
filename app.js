const express = require("express");
const cors = require("cors");

const app = express();

// app.use(cors()); // allows all origins

app.get("/", (req, res) => {
  res.send("CORS enabled for all origins");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});