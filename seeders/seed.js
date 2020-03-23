var mongoose = require("mongoose");
var db = require("../models/transaction.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});


var budgetSeed = [];
