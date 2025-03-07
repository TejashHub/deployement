import express from "express";

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("welcome dear");
});

app.listen(5000, () => {
  console.log("port run");
});
