// src/pages/Signup.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiRoutes } from "../config.js";
import "./Login-Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!name || !email || !password || !age) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(apiRoutes.auth.signup, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, age }),
      });

      let data;
      try {
        data = await res.json(); // parse JSON
      } catch (err) {
        throw new Error("Invalid server response");
      }

      console.log("Signup response:", res.status, data); // Debug

      // Success: res.ok and no error field
      if (res.ok && !data.error) {
        toast.success(data.message || "Signup successful! OTP sent to your email.");
        localStorage.setItem("signupEmail", email);

        setTimeout(() => navigate("/otp"), 1500);
        return;
      }

      // Handle backend errors
      throw new Error(data.error || data.message || "Signup failed");
    } catch (err) {
      console.error("Signup error:", err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="home-page-container">
      <section className="mental-health-img">
        <img src="/home-img.png" alt="Home-Img" />
      </section>

      <section className="login-form">
        <form onSubmit={handleSignup}>
          <h2>Sign Up Here!</h2>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min={1}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </main>
  );
}

export default Signup;
