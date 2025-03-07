import { useEffect, useState } from "react";
import { MovieDetails } from "../types";
import { fetchMovieDetails } from "../services/apiService";

const useMovieDetails = (movieId: string) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return { movie, loading, error };
};

export default useMovieDetails;
