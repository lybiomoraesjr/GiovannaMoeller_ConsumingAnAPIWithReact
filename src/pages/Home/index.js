import { Container, MovieList, Movie } from "./styles";

function Home() {
  const movies = [
    {
      id: 1,
      title: "Spider Man",
      image_url:
        "https://m.media-amazon.com/images/S/pv-target-images/2dd45c7f45bd772247638e4d70e36b8fc8929bfda829a0258ccb6923e7fea912.jpg",
    },
    {
      id: 2,
      title: "Batman",
      image_url:
        "https://m.media-amazon.com/images/S/pv-target-images/2dd45c7f45bd772247638e4d70e36b8fc8929bfda829a0258ccb6923e7fea912.jpg",
    },
    {
      id: 3,
      title: "Avengers",
      image_url:
        "https://m.media-amazon.com/images/S/pv-target-images/2dd45c7f45bd772247638e4d70e36b8fc8929bfda829a0258ccb6923e7fea912.jpg",
    },
    {
      id: 1,
      title: "Spider Man",
      image_url:
        "https://m.media-amazon.com/images/S/pv-target-images/2dd45c7f45bd772247638e4d70e36b8fc8929bfda829a0258ccb6923e7fea912.jpg",
    },
    {
      id: 2,
      title: "Batman",
      image_url:
        "https://m.media-amazon.com/images/S/pv-target-images/2dd45c7f45bd772247638e4d70e36b8fc8929bfda829a0258ccb6923e7fea912.jpg",
    },
    {
      id: 3,
      title: "Avengers",
      image_url:
        "https://m.media-amazon.com/images/S/pv-target-images/2dd45c7f45bd772247638e4d70e36b8fc8929bfda829a0258ccb6923e7fea912.jpg",
    },
  ];

  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="https://google.com.br">
                <img src={movie.image_url} alt={movie.title} />
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
