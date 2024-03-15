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

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
        value="Superman"
        onChange={() => {}} />
        <img src={SearchIcon} 
        alt="search" 
        onClick={() => {}}
        />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  )
}