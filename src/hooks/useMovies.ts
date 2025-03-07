import { useEffect, useState } from "react";
import { Movie } from "../types";
import { fetchMovieData } from "../services/apiService";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getMovieData() {
      try {
        const data = await fetchMovieData();
        if (data) {
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

  return { movies, loading, error };
};
export default useMovies;
