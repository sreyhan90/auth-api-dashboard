import "../CSS/Login.css";
import { Formik } from "formik";
import * as Yup from "yup";

function LoginPage() {
  const validationSchema = Yup.object({});
  return (
    <div className="login-page">
      <div className="login-card">
        <span className="login-title">Login</span>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            errors,
            touched,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                className="login-input"
                name="username"
                type="text"
                placeholder="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
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
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}

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
