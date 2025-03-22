import React, { useState } from 'react';
import './CSS/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [isInputValid, setIsInputValid] = useState(true);
  const [registerError, setRegisterError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New success message state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Reset success message on new submission

    if (formData.username.trim() === "" || formData.email.trim() === "" || formData.password === "") {
      setIsInputValid(false);
      setRegisterError("Kindly fill all fields");
      return;
    } else {
      setIsInputValid(true);
      setRegisterError("");
      setIsSubmitting(true);

      setTimeout(() => {
        setSuccessMessage("Registration successful!"); // Show success message after submission
      }, 2000);

      setTimeout(()=>{
         navigate("/login-page");
      },6000)
      setSuccessMessage("");
    }
  };

  return (
    <div className="form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          id="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Register"}
        </button>

        {!isInputValid && <div className="messages error">{registerError}</div>}
        {successMessage && <div className="messages success">{successMessage}</div>} {/* Success message */}

        <Link className="link" to="/login">Login here</Link>
      </form>
    </div>
  );
};

export default Register;
