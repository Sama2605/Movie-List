import React from "react";
import { Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Box className="flex justify-end">
      <Button
        onClick={onClick}
        variant="contained"
        startIcon={<ArrowBackIcon />}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Back to Movies
      </Button>
    </Box>
  );
};

export default BackButton;
