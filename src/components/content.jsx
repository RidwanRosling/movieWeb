import Tilt from "react-parallax-tilt";
import { CiBookmark } from "react-icons/ci";

export default function MainContent({ movies, error, saveListContent }) {
  function saveMovies(movie) {
    saveListContent((prev) => {
      if (prev.some((item) => item.imdbID === movie.imdbID)) {
        alert("Already saved!");
        console.log("Already saved! ", movie);
        return prev;
      }

      console.log("Saved movies: ", movie);
      return [...prev, movie];
    });
  }

  if (error) {
    return (
      <div
        className="error"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
          {error}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="container-content">
        {movies.map((movie) => (
          <Content
            key={movie.imdbID}
            movie={movie}
            error={error}
            saveMovies={saveMovies}
          />
        ))}
      </div>
    );
  }
}

function Content({ movie, saveMovies }) {
  return (
    <div className="content" key={movie.imdbID}>
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={600}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        gyroscope={false}
      >
        <img className="img-content" src={movie.Poster} alt={movie.Title} />
      </Tilt>
      <span className="span-content">{movie.Title}</span>
      <div className="save-detail">
        <CiBookmark
          onClick={() => saveMovies(movie)} // Pass the movie object
          className="save-icon"
        />

        <span
          className="detail-content"
          onClick={() => {
            window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank");
          }}
        >
          detail
        </span>
      </div>
    </div>
  );
}
