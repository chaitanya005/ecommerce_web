const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const fs = require("fs");

app.use(
  express.static(
    path.resolve(__dirname, ".", "build")
    // { maxAge: '30d' },
  )
);

app.get("/helo", (req, res) => {
  res.send({ message: "hello world" });
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
