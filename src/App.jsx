import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import Navbar from "./components/navbar";
import MainContent from "./components/content";

const KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("interstellar");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie Not found");
        setMovies(data.Search);
        console.log(data.Search);
      } catch (err) {
        console.error("Error: ", err.message);
        setError(err.message);
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar setQuery={setQuery} />{" "}
      <MainContent movies={movies} error={error} />
    </>
  );
}

export default App;
