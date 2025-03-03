import { useEffect, useState } from "react";
import { fetchMovieData } from "../services/apiService";
import { Movie } from "../types";
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
  return <>test</>;
};

export default VideoList;
