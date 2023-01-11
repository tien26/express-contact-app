const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  res.send("Ini halaman Contact");
});
app.get("/product/:id", (req, res) => {
  res.send(`product_id : ${req.params.id} <br> cat_id : ${req.query.cat_id}`);
});
app.use("/", function (req, res) {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
