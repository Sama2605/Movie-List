import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

function App() {
  const MovieList = React.lazy(() => import("./pages/MovieList"));
  const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
