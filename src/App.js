import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllArts from "./Pages/AllArts/AllArts";
import Error from "./Pages/Error";
import LandingPage from "./Pages/LandingPage";
import SingleArt from "./Pages/singleArt";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="allarts" element={<AllArts />} />
        <Route path="single/:id" element={<SingleArt />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
