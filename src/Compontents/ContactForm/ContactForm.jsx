import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"; 
import logo from "../../assets/logo.png";
import ContactAPI from "../../API/Contact/ContactApi";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState("");
  const [successMsg, setSuccess] = useState("");

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Enter valid phone number")
      .required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

 const handleSubmit = async (values, { resetForm }) => {
  setLoading(true);

  await ContactAPI(values);

  toast.success("Message sent successfully ");
  resetForm();
  setLoading(false);
};

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img src={logo} alt="Building" className="img-fluid rounded" />
        </div>

        <div className="col-lg-6">
          <h3 className="mb-4 fw-bold contact-us text-uppercase">Contact Us</h3>

          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form noValidate>
                <div className="mb-3">
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    className={`form-control custom-input ${
                      errors.fullName && touched.fullName ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    className={`form-control custom-input ${
                      errors.email && touched.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    className={`form-control custom-input ${
                      errors.phone && touched.phone ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message *"
                    rows="4"
                    className={`form-control custom-textarea ${
                      errors.message && touched.message ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark custom-btn"
                  disabled={isSubmitting || loading}
                >
                  {loading ? "Sending..." : "SUBMIT"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
