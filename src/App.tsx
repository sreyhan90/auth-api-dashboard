import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "../src/Pages/LoginPage";
import DashboardHomePage from "../src/Pages/DashboardHomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<DashboardHomePage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
