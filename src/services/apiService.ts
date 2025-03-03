import { ApiResponse, Movie } from "../types";

const API = `https://api.themoviedb.org/3/movie/popular?api_key=${
  import.meta.env.VITE_API_KEY
}`;

export async function fetchMovieData(): Promise<Movie[]> {
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Couldn't connect to the endpoint");
    }
    const data: ApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
