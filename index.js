//Importing reqired packages
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

//Initiating the express app
const app = express();
const port = 3000; // Currently port

//Set up EJS 
app.set("view engine", "ejs")

//Simple Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//GET 
app.get("/", (req, res) => {
  
  //initiate variable
  const data = {
    title: "Input your name here!!"
  }
  res.render("index.ejs", data);
});

//POST
app.post("/submit", (req, res) => {

  //Initiate varaibles
  let wordOfName = req.body["fName"] + req.body["lName"];
  let fullname = wordOfName.length;

  res.render("index.ejs", {
    dynamicNumber: fullname
  });

});

//Listen 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
