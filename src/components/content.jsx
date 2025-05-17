import Tilt from "react-parallax-tilt";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { useState } from "react";

export default function MainContent({ movies, error, saveListContent }) {
  function saveMovies(movie) {
    saveListContent((prev) => {
      const isSaved = prev.some((item) => item.imdbID === movie.imdbID);

      if (isSaved) {
        // Hapus dari list
        const updated = prev.filter((item) => item.imdbID !== movie.imdbID);
        console.log("Removed movie: ", movie);
        return updated;
      } else {
        // Tambahkan ke list
        console.log("Saved movie: ", movie);
        return [...prev, movie];
      }
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
  const [ciBookmark, setCiBookmark] = useState(false);
  function changeBookmark() {
    setCiBookmark((prev) => !prev);
    if (!ciBookmark) {
      saveMovies(movie);
    }
    console.log("Bookmark: ", movie);
  }

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
        {ciBookmark ? (
          <CiBookmarkCheck className="save-icon" onClick={changeBookmark} />
        ) : (
          <CiBookmark className="save-icon" onClick={changeBookmark} />
        )}

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
