import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "../src/Pages/LoginPage";
import DashboardHomePage from "../src/Pages/DashboardHomePage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { useAppSelector } from "../src/app/hooks";

function App() {
  const token = useAppSelector((s) => s.auth.token);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/Login"
          element={token ? <Navigate to="/dashboard" replace /> : <LoginPage />}
        />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <DashboardHomePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
