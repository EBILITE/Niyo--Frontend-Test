import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
