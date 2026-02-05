import "../CSS/Login.css";
import { Formik } from "formik";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <span className="login-title">Login</span>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <input
                className="login-input"
                name="username"
                type="text"
                placeholder="username"
                value={values.username}
                onChange={handleChange}
              />

              <input
                className="login-input"
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />

              <button className="login-btn">Login</button>
            </form>
          )}
        </Formik>

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
