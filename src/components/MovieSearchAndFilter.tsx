import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  SelectChangeEvent,
} from "@mui/material";

interface MovieSearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filter: number) => void;
}

const MovieSearchAndFilter: React.FC<MovieSearchAndFilterProps> = ({
  onSearch,
  onFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilterChange = (event: SelectChangeEvent<number>) => {
    const filter = Number(event.target.value);
    setSelectedFilter(filter);
    onFilter(filter);
  };

  return (
    <Box className="mb-6 flex flex-col sm:flex-row gap-4">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="sm:flex-grow"
      />
      <FormControl fullWidth className="sm:w-48">
        <InputLabel id="filter-label">Filter by</InputLabel>
        <Select
          labelId="filter-label"
          value={selectedFilter}
          onChange={handleFilterChange}
          label="Filter by"
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={28}>Action</MenuItem>
          <MenuItem value={35}>Comedy</MenuItem>
          <MenuItem value={18}>Drama</MenuItem>
          <MenuItem value={878}>Sci-Fi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MovieSearchAndFilter;
