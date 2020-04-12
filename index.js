const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello everyove");
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});

app.listen(5555, () => {
  console.log("App listening on port 5555!");
});
