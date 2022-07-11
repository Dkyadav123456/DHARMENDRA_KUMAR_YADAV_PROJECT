const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const app = express();

/********************************[JSON FORM PROVEDE MY ALL RESULT]****************************/
app.use(bodyParser.json());

/******************************[MONGO-DB AND NOTE.JS CONNECTED]*******************************/
mongoose
  .connect(
    "mongodb+srv://Dharmendra:dkyadav123@cluster0.kq9bu.mongodb.net/Book-Management-Project-Final",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Hello Mr Dkyadav:- MongoDb is connected"))
  .catch((err) => console.log(err));


/***************************************[GLOBAL API'S]****************************************/
app.use("/", route);


/***************************************[PORT CREATED]****************************************/
app.listen(process.env.PORT || 5550, function () {
  console.log("Express app is running on PORT " + (process.env.PORT || 5550));
});
