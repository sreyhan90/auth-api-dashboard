import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers } from "../features/users/usersSlice";
import "../CSS/UserPage.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function UsersPage() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((s) => s.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;

    return items.filter((u) => {
      const fullName = `${u.firstName} ${u.lastName}`.toLowerCase();
      return (
        fullName.includes(q) ||
        u.username.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
      );
    });
  }, [items, query]);

  const navigate = useNavigate();

  return (
    <div className="users-page">
      <header className="users-page__header">
        <h2 className="users-page__title">Users</h2>
      </header>
      <input
        className="users-search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, username, email..."
      />

      <div className="users-page__content">
        {status === "loading" && (
          <div className="users-page__state">Loading users...</div>
        )}

        {status === "error" && (
          <div className="users-page__state users-page__state--error">
            {error}
          </div>
        )}

        {status === "success" && (
          <div className="users-table">
            <div className="users-table__head">
              <span>Name</span>
              <span>Username</span>
              <span>Email</span>
            </div>

            {filteredItems.map((user) => (
              <div
                key={user.id}
                className="users-table__row"
                onClick={() => navigate(`/dashboard/users/${user.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    navigate(`/dashboard/users/${user.id}`);
                }}
              >
                <div className="users-table__user">
                  <img src={user.image} alt={user.firstName} />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
