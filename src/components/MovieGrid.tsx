import Grid from "@mui/material/Grid2";
import MovieCard from "./MovieCard";
import { Movie } from "../types";

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <Grid container spacing={4} className="flex justify-center">
      {movies.map((movie) => (
        <Grid
          key={movie.id}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          className="flex justify-center"
        >
          <MovieCard {...movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
