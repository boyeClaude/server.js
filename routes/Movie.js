const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "boye.claude@1502",
  database: "moviedb",
});

/** Get elements from the db */
router.get("/get", (request, response) => {
  const sqlGet = "SELECT * FROM movie_reviews";
  db.query(sqlGet, (error, result) => {
    response.send(result);
  });
});

/** create Element */
router.post("/create", (request, response) => {
  const movieName = request.body.movieName;
  const movieReviews = request.body.movieReviews;

  const sqlCreate =
    "INSERT INTO movie_reviews(movieName, movieReviews) VALUES (?,?)";
  db.query(sqlCreate, [movieName, movieReviews], (error, result) => {});
});

/** delete element */
router.delete("/delete/:movieName", (request, response) => {
  const name = request.params.movieName;
  const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
  db.query(sqlDelete, name, (error, result) => {
    if (error) console.log(error);
  });
});

/** udpate element */
router.put("/put", (request, response) => {
  const name = request.body.movieName;
  const review = request.body.movieReviews;
  const sqlUpdate =
    "UPDATE  movie_reviews SET movieReviews = ? WHERE movieName = ?";
  db.query(sqlUpdate, [review, name], (error, result) => {
    if (error) console.log(error);
  });
});

module.exports = router;

/**
 * router.get("/", GetAllMovies);
 * router.post("/create", createMovie);
 * router.put("/", UpdateMovie);
 * router.delete("/:movieName", DeleteMovie);
 */
