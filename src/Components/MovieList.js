import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  return (
    <div className="list" >
      {data.map((el) => (
        <MovieCard movieInfo={el} />
      ))}
    </div>
  );
};

export default MovieList;