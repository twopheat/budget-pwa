var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});

var imageSeed = [
  {
    description: "Budget Icon",
    image: "",
    rating: 0,
    date: new Date(Date.now())
  }
];

