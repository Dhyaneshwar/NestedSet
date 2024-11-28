import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import DashboardPage from "./components/Dashboard";
import VisualisePage from "./components/Visualise";
import VisualiseAllPage from "./components/VisualiseAll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/visualise" element={<VisualisePage />} />
        <Route path="/all" element={<VisualiseAllPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
