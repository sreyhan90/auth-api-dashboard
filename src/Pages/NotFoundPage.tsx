import { Link, useLocation } from "react-router-dom";
import "../CSS/NotFoundPage.css";
import { useAppSelector } from "../app/hooks";

export default function NotFoundPage() {
  const location = useLocation();
  const token = useAppSelector((s) => s.auth.token);

  return (
    <div className="notfound">
      <div className="notfound__card">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Page not found</h1>
        <p className="notfound__subtitle">
          The page you tried to open doesn&apos;t exist.
        </p>

        <div className="notfound__path">
          <span>Path:</span> <code>{location.pathname}</code>
        </div>

        <div className="notfound__actions">
          <Link className="notfound__btn" to="/dashboard">
            Back to Dashboard
          </Link>
          <Link className="notfound__btn notfound__btn--ghost" to="/login">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
