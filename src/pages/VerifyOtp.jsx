// src/pages/VerifyOtp.js

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiRoutes } from "../config.js";
import "./Login-Signup.css";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("signupEmail");
    if (!storedEmail) {
      toast.error("No email found. Please sign up first.");
      setTimeout(() => navigate("/signup"), 1500);
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    // Ensure OTP is a number
    const numericOtp = Number(otp);
    if (isNaN(numericOtp) || numericOtp <= 0) {
      toast.error("OTP must be a valid number.");
      return;
    }

    setLoading(true);

    try {
      console.log("Email:", email, "OTP type:", typeof numericOtp, "Value:", numericOtp);

      const res = await fetch(apiRoutes.auth.validateOtp, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: numericOtp }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "OTP verification failed");
      }

      toast.success("OTP verified successfully! You can now log in.");
      localStorage.removeItem("signupEmail");

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="home-page-container">
      <section className="login-form">
        <form onSubmit={handleVerify}>
          <h2>Verify OTP</h2>
          <p>Enter the OTP sent to <strong>{email}</strong></p>

          <label>OTP</label>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => {
              // Only allow digits
              const val = e.target.value;
              if (/^\d*$/.test(val)) setOtp(val);
            }}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
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

export default VerifyOtp;
