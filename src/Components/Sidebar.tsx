import "../CSS/Sidebar.css";
import { NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Users", to: "/dashboard/users" },
];

export default function Sidebar() {
  return (
    <div className="dash-layout">
      <div className="dash-layout__body">
        <aside className="sidebar" aria-label="Sidebar navigation">
          <div className="sidebar__title">Navigation</div>

          <nav className="sidebar__nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/dashboard"} // sadece dashboard root'ta active olsun
                className={({ isActive }) =>
                  [
                    "sidebar__link",
                    isActive ? "sidebar__link--active" : "",
                  ].join(" ")
                }
              >
                <span className="sidebar__linkText">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
