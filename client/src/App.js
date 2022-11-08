import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WorldMap from "./components/WorldMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<WorldMap />} />
      </Routes>
    </Router>
  );
}

export default App;
