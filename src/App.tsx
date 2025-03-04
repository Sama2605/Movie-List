import VideoList from "./pages/VideoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoList />} />
      </Routes>
    </Router>
  );
}

export default App;
