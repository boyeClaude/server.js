const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const { urlencoded } = require("body-parser");
/** import routes*/
const movieRouter = require("./routes/Movie");

app.use("/movie", movieRouter);

/** to manage cors issues in the client */
app.use(cors());

/** to get information from the client as json */
app.use(express.json());

app.use(urlencoded({ extended: true }));

/** server on */
app.listen(4000, () => {
  console.log("server running on port 4000");
});
