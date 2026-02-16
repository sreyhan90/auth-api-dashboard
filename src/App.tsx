import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import DashboardHomePage from "./Pages/DashboardHomePage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { useAppSelector } from "./app/hooks";
import UsersPage from "./Pages/UsersPage";
import UserDetailPage from "./Pages/UserDetailPage";
import DashboardLayout from "./Layouts/DashboardLayout";
import NotFoundPage from "./Pages/NotFoundPage";
function App() {
  const token = useAppSelector((s) => s.auth.token);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" replace /> : <LoginPage />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
