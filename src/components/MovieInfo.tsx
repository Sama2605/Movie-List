import { Box, Typography, Chip } from "@mui/material";
import { MovieDetails } from "../types";
import StarIcon from "@mui/icons-material/Star";
import { formatRuntime } from "../utils/formatRuntime";

const MovieInfo: React.FC<MovieDetails> = ({
  title,
  genres,
  vote_average,
  vote_count,
  overview,
  release_date,
  runtime,
  production_companies,
}) => {
  return (
    <>
      <Typography variant="h4" className="font-bold mb-3">
        {title}
      </Typography>

      <Box className="flex flex-wrap gap-2 mb-3">
        {genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            className="bg-gray-200 text-gray-800"
          />
        ))}
      </Box>

      <Box className="flex items-center gap-2 mb-3">
        <StarIcon className="text-yellow-500" />
        <Typography variant="body2" className="font-semibold">
          {vote_average.toFixed(1)}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          ({vote_count} votes)
        </Typography>
      </Box>

      <Typography variant="body1" className="text-gray-700 mb-4">
        {overview}
      </Typography>

      <Box className="space-y-2 mb-4">
        <Typography variant="body2">
          <strong>Release Date:</strong> {release_date}
        </Typography>
        <Typography variant="body2">
          <strong>Runtime:</strong> {formatRuntime(runtime)}
        </Typography>
      </Box>

      <Box className="mb-4">
        <Typography variant="body2" className="font-semibold mb-1">
          Production:
        </Typography>
        <ul className="list-disc pl-5">
          {production_companies.map((production) => (
            <li key={production.id} className="text-gray-700">
              {production.name}
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default MovieInfo;
