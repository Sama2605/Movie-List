import { useEffect, useState } from "react";
import { fetchMovieData } from "../services/apiService";
import { Movie } from "../types";
import { Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import VideoCard from "./VideoCard";
//
const VideoList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getMovieData() {
      try {
        const data = await fetchMovieData();
        if (data) {
          console.log(data);
          setMovies(data);
        }
      } catch (error) {
        console.error(error);
        setError(
          error instanceof Error
            ? error
            : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    }
    getMovieData();
  }, []);

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
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {movies.map((movie) => (
          <Grid
            key={movie.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <VideoCard {...movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VideoList;
