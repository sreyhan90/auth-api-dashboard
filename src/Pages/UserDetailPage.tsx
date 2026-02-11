import { useParams, Link } from "react-router-dom";

export default function UserDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h2>User Detail (Coming soon)</h2>
      <p>User id: {id}</p>
      <Link to="/dashboard/users">Back to Users</Link>
    </div>
  );
}
