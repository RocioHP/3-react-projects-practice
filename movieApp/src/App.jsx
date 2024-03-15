import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com?apikey=9bbba650";

const movie1 = {
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
};


export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} 
        />
        <img src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      { movies?.length > 0
        ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          )
         : (
          <div className="empty">
             <h2>No movies found</h2> 
          </div>
         )
      }
    </div>
  )
}