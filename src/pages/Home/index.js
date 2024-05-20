import { Container, MovieList, Movie } from "./styles";
import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // consumir a api...

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="https://google.com.br">
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
