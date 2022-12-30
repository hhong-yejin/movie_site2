import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-layout">
      <div>
        <img className="movie-img" src={movie.image} alt="no img" />
      </div>
      <div className="movie-title">{movie.title.replace(/<[^>]*>?/g, "")}</div>
    </div>
  );
};

export default MovieCard;
