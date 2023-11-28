import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";
import Navigation from "./Components/Navigation";
const App = () => {
  const [movies, setMovies] = useState(data);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  

  return (
    <div className="App">
      <Navigation />
     
        <Filter setSearch={setSearch} setRating={setRating} />
       
        <AddMovie movies={movies} setMovies={setMovies} />
        <br />
        <p><h1> Movies  </h1> </p>
        <MovieList 
          data={movies.filter(
            (el) =>
              el.title.trim().toLocaleLowerCase().includes(search) &&
              el.rating >= rating
          )}
        />
        </div>
      
    
   
  );
};

export default App;

