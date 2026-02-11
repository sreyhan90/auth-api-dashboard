import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const tokenInStore = useAppSelector((s) => s.auth.token);
  const token = tokenInStore ?? localStorage.getItem("accessToken");

  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
