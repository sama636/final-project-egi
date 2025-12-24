import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import loginSchema from "../../schemas/loginSchema";
import logo from "../../assets/logo.png";
import LoginAPI from "../../API/Auth/LoginAPI";
import { useNavigate } from "react-router";
export default function Login() {
  const nagivate = useNavigate();
  const [loading, setloaing] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(""); // data type is string as text "ZeyadAhmed@gmail.com"
  const [password, setPassword] = useState("");
  const LoginApi = () => {
    const data = {
      email,
      password,
    };
    LoginAPI(setloaing, setError, data, nagivate);
  };
  return (
    <>
      <div className="container pt-5 my-3">
        <div className="row g-4 flex-column align-content-center flex-md-row align-items-stretch">
          <div className="col-10 col-md-6">
            <div className="h-100">
              <img className="Photo rounded-1 h-100" src={logo} />
            </div>
          </div>
          <div className="col-10 col-md-6">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                LoginAccount(values);
              }}
            >
              <div className="user__form d-flex flex-column justify-content-center h-100">
                <div className="d-flex col-12 flex-column gap-2 mb-3 ">
                  <label htmlFor="">Email:</label>
                  <input
                    className="inp"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <span className="text-danger">
                  <ErrorMessage name="email" />
                </span>
                <div className="d-flex col-12 flex-column gap-2 mb-3 ">
                  <label htmlFor="">Password:</label>
                  <input
                    className="inp"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <span className="text-danger">
                  <ErrorMessage name="password" />
                </span>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className=" sign-btn w-100"
                    onClick={LoginApi}
                  >
                    {loading ? "loading..." : "Log In"}
                  </button>
                  {error}
                </div>
              </div>
            </Formik>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
