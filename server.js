const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());

// REQUIRE YOUR MONGOOSE CONNECTION CONFIG FILE 
require('./server/config/mongoose.config')

// REQUIRE YOUR ROUTES FILE 
require('./server/routes/exam.routes')(app)

// app.get("/", (req, res) => {
//     res.json({"message": "Working Route "});
// });

app.listen(port, () => console.log(`Listening on port ${port}`));