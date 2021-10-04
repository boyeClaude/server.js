import {
  QueryListOfMovies,
  QueryMovieById,
  QueryUpdateMovie,
  QueryDeleteMovie,
} from "../services/MovieTable";

export const GetAllMovies = (request, response) => {
  const movieList = QueryListOfMovies();
  return response.json(movieList);
};

export const GetMovie = (request, response) => {
  const movieId = request.params.id;
  const movie = QueryMovieById(movieId);
  return response.json(movie);
};

export const UpdateMovie = (request, response) => {
  const movieName = request.params.name;
  const movieReviews = request.params.movieReviews;
  const movie = QueryUpdateMovie(movieReviews, movieName);
  return response.json(movie);
};

export const DeleteMovie = (request, response) => {
  const movieName = request.params.movieName;
  const movie = QueryDeleteMovie(movieName);
  return response.json(movie);
};
