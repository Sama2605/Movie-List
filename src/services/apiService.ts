import { ApiResponse, Movie } from "../types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchMovieData(): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
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

export async function fetchMovieDetails(movieId: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
