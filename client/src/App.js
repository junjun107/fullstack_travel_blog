import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import WorldMap from "./components/WorldMap";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={user ? <WorldMap /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
