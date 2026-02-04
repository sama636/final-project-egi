import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EditApi from "../../API/Auth/EditApi/EditApi";
import { useNavigate } from "react-router-dom";

export default function EditDataForm() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserData({
        email: user.email || "",
        password: user.password || "",
      });
    }
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-12 col-md-6 d-none d-md-block">
          <img src={logo} alt="EditData" className="img-fluid h-100" />
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-0 p-4">
            <h3 className="text-center fw-bolder mb-4">Edit Your Data</h3>

            {error && (
              <div className="alert alert-danger text-center">{error}</div>
            )}
            {success && (
              <div className="alert alert-success text-center">{success}</div>
            )}

            <Formik
              initialValues={userData}
              enableReinitialize
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Password is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setError("");
                setSuccess("");

                EditApi(setLoading, setError, values, navigate)
                  .then(() => setSuccess("Profile updated successfully!"))
                  .catch(() => setError("Failed to update profile"));

                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  <button
                    type="submit"
                    className=" sign-btn w-100"
                    disabled={isSubmitting || loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
