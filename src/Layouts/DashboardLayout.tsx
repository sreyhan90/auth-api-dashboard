import "../CSS/DashboardLayout.css";
import { Outlet } from "react-router-dom";
import Topbar from "../Components/topbar";
import Sidebar from "../Components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="dash-layout">
      <Topbar />

      <div className="dash-layout__body">
        <Sidebar />

        <main className="dash-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
