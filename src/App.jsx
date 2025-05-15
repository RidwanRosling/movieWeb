import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { Sling as Hamburger } from "hamburger-react";

const KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const query = "interstellar";
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
  }, []);

  return <Navbar />;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(() => !isOpen);
  }

  return (
    <nav>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {isOpen && (
        <div className="list-menu">
          <ul>
            <li>saved</li>
            <li>trending</li>
            <li>genre</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default App;
