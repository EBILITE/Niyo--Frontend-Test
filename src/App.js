import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllArts from "./Pages/AllArts/AllArts";
import LandingPage from "./Pages/LandingPage";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="allarts" element={<AllArts />} />
      </Routes>
    </Router>
  );
}

export default App;
