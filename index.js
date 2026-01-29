import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Input your name here!!"
  }
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {

  let wordOfName = req.body["fName"] + req.body["lName"];
  let fullname = wordOfName.length;

  res.render("index.ejs", {
    finalNumbers: fullname
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
