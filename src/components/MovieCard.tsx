import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Movie } from "../types";
import { Link } from "react-router-dom";

const MovieCard: React.FC<Movie> = ({
  id,
  title,
  poster_path,
  vote_average,
}) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="no-underline"
      aria-label={`View details for ${title}`}
    >
      <Card className="h-full flex flex-col w-full max-w-[280px] hover:shadow-lg hover:scale-105 hover:border-2 hover:border-gray-200">
        <CardMedia
          component="img"
          className="w-full object-cover aspect-[2/3] "
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          loading="lazy"
        />
        <CardContent className="flex-grow">
          <Typography variant="h6" component="h2" className="font-bold">
            {title}
          </Typography>
          <Typography variant="body2" className="mt-2 flex items-center gap-1">
            <StarIcon className="text-yellow-500" fontSize="small" />
            <span className="font-semibold">Rating:</span>{" "}
            {vote_average.toFixed(1)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
