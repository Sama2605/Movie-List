import { useState } from "react";
import { Movie } from "../types";

const useSearchAndFilter = (movies: Movie[]) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleFilter = (filter: number) => {
    setSelectedFilter(filter);
    if (!filter) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(filter)
      );
      setFilteredMovies(filtered);
    }
  };

  return {
    filteredMovies,
    searchQuery,
    selectedFilter,
    handleSearch,
    handleFilter,
  };
};

export default useSearchAndFilter;
