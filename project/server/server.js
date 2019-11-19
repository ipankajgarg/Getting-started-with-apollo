const express = require("express");
const expressGraphql = require("express-graphql");
const schema = require("./schema");
const mongoose = require("mongoose");

//** connecting mongoose with express
mongoose.connect(
  "mongodb://apollo-course:apollo123@ds347298.mlab.com:47298/apollo-course",
  { useNewUrlParser: true }
);
//**

//**  Just checking that connection has established or not
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

//**

const app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.use(
  "/graphql",
  expressGraphql({
    schema,
    graphiql: true
  })
);

app.listen(4000, function() {
  console.log("Its time to do");
});
