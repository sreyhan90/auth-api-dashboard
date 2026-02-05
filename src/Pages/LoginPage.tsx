import "../CSS/Login.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <span className="login-title">Login</span>

        <input className="login-input" type="text" placeholder="Username" />

        <input className="login-input" type="password" placeholder="Password" />

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
