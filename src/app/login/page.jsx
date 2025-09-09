"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email address";
    if (!form.password || form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!form.phone.match(/^[0-9]{9,15}$/))
      newErrors.phone = "Enter a valid phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Form submitted successfully!");
      console.log(form);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <p>Welcome! Please fill in the details to get started.</p>

        <div className="social-login">
          <button type="button">Google</button>
          <button type="button">GitHub</button>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First name (optional)"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name (optional)"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <small className="error">{errors.username}</small>}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <small className="error">{errors.email}</small>}

        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <small className="error">{errors.phone}</small>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <small className="error">{errors.password}</small>}

        <button type="submit" className="submit-btn">Continue</button>
        <Link href={'/forgot'}>Forgot Password?</Link>

        <p className="signin-link">
          Already have an account? <a href="/loginup">Sign up</a> ,<Link href={'/'}>Back to page</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
