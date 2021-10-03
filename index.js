const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const { urlencoded } = require("body-parser");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "boye.claude@1502",
  database: "moviedb",
});

/** to manage cors issues in the client */
app.use(cors());

/** to get information from the client as json */
app.use(express.json());

app.use(urlencoded({ extended: true }));

/** Get elements from the db */
app.get("/api/get", (request, response) => {
  const sqlGet = "SELECT * FROM movie_reviews";
  db.query(sqlGet, (error, result) => {
    response.send(result);
  });
});

/** create Element */
app.post("/api/create", (request, response) => {
  const movieName = request.body.movieName;
  const movieReviews = request.body.movieReviews;

  const sqlCreate =
    "INSERT INTO movie_reviews(movieName, movieReviews) VALUES (?,?)";
  db.query(sqlCreate, [movieName, movieReviews], (error, result) => {});
});

/** delete element */
app.delete("/api/delete/:movieName", (request, response) => {
  const name = request.params.movieName;
  const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
  db.query(sqlDelete, name, (error, result) => {
    if (error) console.log(error);
  });
});

/** udpate element */
app.put("/api/put", (request, response) => {
  const name = request.body.movieName;
  const review = request.body.movieReviews;
  const sqlUpdate =
    "UPDATE  movie_reviews SET movieReviews = ? WHERE movieName = ?";
  db.query(sqlUpdate, [review, name], (error, result) => {
    if (error) console.log(error);
  });
});

/** server on */
app.listen(4000, () => {
  console.log("server running on port 4000");
});
