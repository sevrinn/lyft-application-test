const strCutter = require('./strCutter')
const express = require('express');
const path = require("path");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.post("/test", (req, res) => {
  const {string_to_cut} = req.body;
  console.log(req.body)
  if (string_to_cut && typeof string_to_cut === "string") {
    res.json(strCutter(string_to_cut));
  } else {
    res.status(400).send("Something's not right with this post req");
  }
  res.end();
});



