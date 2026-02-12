import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers } from "../features/users/usersSlice";
import "../CSS/UserPage.css";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((s) => s.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="users-page">
      <header className="users-page__header">
        <h2 className="users-page__title">Users</h2>
      </header>

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

            {items.map((user) => (
              <div key={user.id} className="users-table__row">
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
