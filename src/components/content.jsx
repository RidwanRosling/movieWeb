import Tilt from "react-parallax-tilt";

export default function MainContent({ movies, error }) {
  return (
    <div className="container-content">
      {movies.map((movie) => (
        <Content key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

function Content({ movie }) {
  return (
    <li className="content" key={movie.imdbID}>
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={600}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        gyroscope={true}
      >
        <img className="img-content" src={movie.Poster} alt={movie.Title} />
        <span className="span-content">{movie.Title}</span>
      </Tilt>
    </li>
  );
}
