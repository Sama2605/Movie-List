import { Typography, Container } from "@mui/material";

import useMovies from "../hooks/useMovies";
import MovieGrid from "../components/MovieGrid";

const VideoList: React.FC = () => {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Container className="py-8">
      <Typography variant="h4" component="h1" className="text-center mb-6">
        Popular Movies
      </Typography>
      <MovieGrid movies={movies} />
    </Container>
  );
};

export default VideoList;
