import { Container } from "@mui/material";
import useMovies from "../hooks/useMovies";
import MovieGrid from "../components/MovieGrid";
import MovieSearchAndFilter from "../components/MovieSearchAndFilter";
import useSearchAndFilter from "../hooks/UseSearchAndFilter";

const MovieList: React.FC = () => {
  const { movies, loading, error } = useMovies();
  const { filteredMovies, handleSearch, handleFilter } =
    useSearchAndFilter(movies);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Container className="py-8">
      <MovieSearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
      <MovieGrid movies={filteredMovies} />
    </Container>
  );
};

export default MovieList;
