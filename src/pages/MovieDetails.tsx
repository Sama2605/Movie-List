import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import useMovieDetails from "../hooks/useMovieDetails";
import MoviePoster from "../components/MoviePoster";
import MovieInfo from "../components/MovieInfo";
import BackButton from "../components/BackButton";

const MovieDetails: React.FC = () => {
  const { movieId } = useParams();
  const { movie, loading, error } = useMovieDetails(movieId as string);
  const navigate = useNavigate();

  if (loading)
    return (
      <Box className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Typography className="text-red-500 text-center mt-6">{error}</Typography>
    );
  if (!movie)
    return (
      <Typography className="text-gray-700 text-center mt-6">
        No movie details found.
      </Typography>
    );

  return (
    <Box className="min-h-screen flex justify-center items-center px-6 py-12">
      <Box className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full flex flex-col sm:flex-row">
        <MoviePoster {...movie} />
        <Box className="p-6 w-full sm:w-2/3 flex flex-col">
          <MovieInfo {...movie} />
          <BackButton onClick={() => navigate("/")} />
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
