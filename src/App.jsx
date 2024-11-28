import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import DashboardPage from "./components/Dashboard";
import VisualisePage from "./components/Visualise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/visual" element={<VisualisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
