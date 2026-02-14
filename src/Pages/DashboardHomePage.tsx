import { Link } from "react-router-dom";
import "../CSS/Dashboard.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchProductsCount,
  fetchUsersCount,
} from "../features/dashboard/dashboardSlice";

type StatStatus = "idle" | "loading" | "success" | "error";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  status?: StatStatus;
  errorText?: string;
};

function StatCard({
  title,
  value,
  description,
  status = "idle",
  errorText,
}: StatCardProps) {
  return (
    <section className="stat-card" aria-busy={status === "loading"}>
      <div className="stat-card__header">
        <h3 className="stat-card__title">{title}</h3>
        <span className={`stat-card__badge stat-card__badge--${status}`}>
          {status === "loading"
            ? "Loading"
            : status === "error"
              ? "Error"
              : status === "success"
                ? "Live"
                : "Placeholder"}
        </span>
      </div>

      <div className="stat-card__value">
        {status === "loading" ? (
          <div className="stat-card__skeleton" />
        ) : status === "error" ? (
          <p className="stat-card__error">{errorText ?? "Failed to load"}</p>
        ) : (
          <p className="stat-card__number">{value}</p>
        )}
      </div>

      <p className="stat-card__description">{description}</p>
    </section>
  );
}

export default function DashboardHomePage() {
  // Gün 1: placeholder state
  const dispatch = useAppDispatch();

  const {
    usersCount,
    productsCount,
    usersStatus,
    productsStatus,
    usersError,
    productsError,
  } = useAppSelector((s) => s.dashboard);

  useEffect(() => {
    dispatch(fetchUsersCount());
    dispatch(fetchProductsCount());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>
        <p className="dashboard__subtitle">Overview of your system</p>
      </header>

      <div className="dashboard__stats">
        <StatCard
          title="Users"
          value={usersCount !== null ? String(usersCount) : "—"}
          description="Total registered users (live)"
          status={usersStatus}
          errorText={usersError ?? undefined}
        />

        <StatCard
          title="Products"
          value={productsCount !== null ? String(productsCount) : "—"}
          description="Total available products (live)"
          status={productsStatus}
          errorText={productsError ?? undefined}
        />
      </div>

      <div className="dashboard__actions">
        <Link to="/dashboard/users" className="dashboard__link">
          Go to Users
        </Link>
      </div>
      <footer className="dashboard__footer">
        Bugün sadece UI iskeleti. Login/token bağlanınca burası protected
        olacak.
      </footer>
    </div>
  );
}
