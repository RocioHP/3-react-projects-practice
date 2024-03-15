import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=9bbba650";

export default function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}