const express = require("express");

const app = express();
PORT = 8080;
app.get("/", (req, res) => {
  try {
    res.send("data getting");
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log("server is running on PORT", PORT);
});
