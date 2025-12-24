import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import registerSchema from "../../schemas/registerSchema";
import "./Register.css";
import logo from "../../assets/logo.png";
import Cookies from "js-cookie";
import useAuthStore from "../../Store/authStore";
import RegisterAPI from "../../API/Auth/RegisterAPI";
import { useNavigate } from "react-router";
export default function Register() {
  // const { authData, setAuthData } = useAuthStore();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nagivate = useNavigate();
  // function RegisterAccount(data) {
  //   delete data.confirmpassword;
  //   console.log(data);
  //   axios.post("https://luxury-real-estate-tawny.vercel.app/register", data, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }

  const RegisterApi = () => {
    const data = {
      fullName,
      email,
      password,
      phone,
      role,
    };
    RegisterAPI(setLoading, setError, data, nagivate);
  };

  console.log(fullName);

  return (
    <div className="container pt-5 my-4">
      <div className="row g-4 flex-column align-content-center flex-md-row align-items-stretch">
        <div className="col-10 col-md-6">
          <div className="h-100">
            <img className="con rounded-2 h-100" src={logo} alt="Sign Up" />
          </div>
        </div>

        <div className="col-10 col-md-6">
          <Formik
            initialValues={{
              email: "",
              name: "",
              role: "Member",
              confirmpassword: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              setAuthData(values);
            }}
          >
            {() => (
              <div className="user-form h-100">
                <div className="mb-3">
                  <label>Full Name</label>
                  <input
                    name="name"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3">
                  <label>Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Choose Role">Choose Role</option>
                    <option value="user">user</option>
                  </select>
                  <ErrorMessage
                    name="role"
                    component="div"
                    className="text-danger small"
                  />
                </div>

                <button
                  type="submit"
                  className="btn sign-btn w-100"
                  onClick={RegisterApi}
                >
                  {loading ? "loading..." : "Sign Up"}
                </button>
                {error}
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
