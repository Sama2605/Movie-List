import { Box } from "@mui/material";
import { MovieDetails } from "../types";

const MoviePoster: React.FC<MovieDetails> = ({ poster_path, title }) => {
  return (
    <Box className="w-full sm:w-1/3 p-4 flex justify-center items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="rounded-lg shadow-md w-full max-w-[250px] sm:max-w-none object-cover"
      />
    </Box>
  );
};

export default MoviePoster;
