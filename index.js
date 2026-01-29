import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Input your name here"
  }
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {

  let wordOfName = req.body["fName"] + req.body["lName"];
  let fullname = wordOfName.length;

  const result = {
    title: `Length of your name is ${fullname}`
  };
  res.render("index.ejs", result)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
