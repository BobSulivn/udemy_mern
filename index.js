// common js module import syntax - nodeJS does not have support for ES2015 modules yet
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/User");

mongoose.connect(keys.mongoURI);

const app = express();

// authRoutes returns a function that we immediately call with the express app created above
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
