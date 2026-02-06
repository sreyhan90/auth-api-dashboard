import "../CSS/Login.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearAuthError, loginUser } from "../features/auth/authSlice";

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status, error } = useAppSelector((s) => s.auth);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("username zorunlu")
      .min(5, "minumun 5 karakter olmasi lazim "),
    password: Yup.string()
      .required("password zorunlu")
      .min(4, "En az 8 karakter olmalı")
      .matches(/[a-z]/, "En az 1 küçük harf olmalı"),
  });
  return (
    <div className="login-page">
      <div className="login-card">
        <span className="login-title">Login</span>
        <div className="login-hint">
          Demo: <b>emilys</b> / <b>emilyspass</b>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const result = await dispatch(loginUser(values));
            if (loginUser.fulfilled.match(result)) {
              navigate("/dashboard");
            }
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                className="login-input"
                name="username"
                type="text"
                placeholder="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={(e) => {
                  if (error) dispatch(clearAuthError());
                  handleChange(e);
                }}
              />
              {touched.username && errors.username && (
                <div className="error">{errors.username}</div>
              )}

              <input
                className="login-input"
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onBlur={handleBlur}
                onChange={(e) => {
                  if (error) dispatch(clearAuthError());
                  handleChange(e);
                }}
              />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
              {error && <div className="error api-error">{error}</div>}
              <button
                className="login-btn"
                type="submit"
                disabled={!dirty || !isValid || status === "loading"}
              >
                {status === "loading" ? "Logging in..." : "Login"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginPage;
