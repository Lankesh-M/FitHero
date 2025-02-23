import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import ProgressTracker from "./ProgressTracker";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/progress-tracker" element={<ProgressTracker />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
