import "../CSS/topbar.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

export default function Topbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((s) => s.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="topbar">
      <div className="topbar__left">
        <span className="topbar__brand">Auth Dashboard</span>
      </div>

      <div className="topbar__right">
        <span className="topbar__welcome">
          Welcome{user?.firstName ? `, ${user.firstName}` : ""} 👋
        </span>

        <button className="topbar__logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
