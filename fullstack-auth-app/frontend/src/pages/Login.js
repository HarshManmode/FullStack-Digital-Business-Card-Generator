import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();  // ✅ FOR REDIRECT
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("userEmail", data.user.email);
        alert("Login successful!");

        navigate("/dashboard");   // ✅ CHANGE THIS LINE

      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error logging in");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {message && <p className="error">{message}</p>}
      <p>Don’t have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
};

export default Login;
