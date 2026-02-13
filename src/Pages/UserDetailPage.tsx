import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../CSS/UserDetailPage.css";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  image: string;
  address: {
    address: string;
    city: string;
  };
};

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        setStatus("loading");
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await res.json();
        setUser(data);
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    };

    fetchUser();
  }, [id]);

  if (status === "loading") {
    return <div className="user-detail__loading">Loading user...</div>;
  }

  if (status === "error" || !user) {
    return <div className="user-detail__error">User not found.</div>;
  }

  return (
    <div className="user-detail">
      <div className="user-detail__card">
        <img
          src={user.image}
          alt={user.firstName}
          className="user-detail__avatar"
        />

        <h2 className="user-detail__name">
          {user.firstName} {user.lastName}
        </h2>

        <p className="user-detail__info">@{user.username}</p>
        <p className="user-detail__info">{user.email}</p>
        <p className="user-detail__info">{user.phone}</p>

        <div className="user-detail__address">
          <strong>Address:</strong>
          <p>
            {user.address.address}, {user.address.city}
          </p>
        </div>

        <Link to="/dashboard/users" className="user-detail__back">
          ← Back to Users
        </Link>
      </div>
    </div>
  );
}
