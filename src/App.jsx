import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import DashboardPage from "./components/Dashboard";
import VisualiseThirdParty from "./components/VisualiseThirdParty";
import VisualisePage from "./components/Visualise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/visualise" element={<VisualisePage />} />
        <Route path="/visualise3Party" element={<VisualiseThirdParty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
