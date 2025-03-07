import { Container, Box, Typography, CircularProgress } from "@mui/material";
import useMovies from "../hooks/useMovies";
import MovieGrid from "../components/MovieGrid";
import MovieSearchAndFilter from "../components/MovieSearchAndFilter";
import useSearchAndFilter from "../hooks/UseSearchAndFilter";

const MovieList: React.FC = () => {
  const { movies, loading, error } = useMovies();
  const { filteredMovies, handleSearch, handleFilter } =
    useSearchAndFilter(movies);

  if (loading)
    return (
      <Box className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Typography className="text-red-500 text-center mt-6">
        {error.message}
      </Typography>
    );
  return (
    <Container className="py-8">
      <MovieSearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
      <MovieGrid movies={filteredMovies} />
    </Container>
  );
};

export default MovieList;
