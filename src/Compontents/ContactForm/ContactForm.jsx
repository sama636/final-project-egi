import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"; 
import logo from "../../assets/logo.png";
import ContactAPI from "../../API/Contact/ContactApi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState("");
  const [successMsg, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await ContactAPI(setLoading, setError, setSuccess, formData);
    }
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

          <form onSubmit={handleSubmit} noValidate>
              <div className=" mb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  className={`form-control custom-input ${errors.fullName ? "is-invalid" : ""}`}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.fullName}</div>
              </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className={`form-control custom-input ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                className={`form-control custom-input ${errors.phone ? "is-invalid" : ""}`}
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.phone}</div>
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Message *"
                className={`form-control custom-textarea ${errors.message ? "is-invalid" : ""}`}
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="invalid-feedback">{errors.message}</div>
            </div>

            <button type="submit" className="btn btn-dark custom-btn" disabled={loading}>
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
