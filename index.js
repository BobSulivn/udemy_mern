// common js module import syntax - nodeJS does not have support for ES2015 modules yet
const express = require("express");
require("./services/passport");

const app = express();

// authRoutes returns a function that we immediately call with the express app created above
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
