import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../types";

const VideoCard: React.FC<Movie> = ({ title, poster_path, vote_average }) => {
  return (
    <Card className="h-full flex flex-col w-full max-w-[280px] ">
      <CardMedia
        component="img"
        className="w-full object-cover aspect-[2/3] "
        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <CardContent className="flex-grow">
        <Typography variant="h6" component="h2" className="font-bold">
          {title}
        </Typography>
        <Typography variant="body2" className="mt-2">
          <span className="font-semibold">Rating:</span> {vote_average}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
