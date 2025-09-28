import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiRoutes } from "../config.js";
import "./Login-Signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [scheduleMessage, setScheduleMessage] = useState(null); // store schedule info

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(apiRoutes.auth.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (!res.ok) {
        // special case: call required
        if (data.schedule) {
          setScheduleMessage(data);
          return;
        }
        // normal error
        throw new Error(data.error || "Login failed");
      }

      // success
      toast.success("Login successful!");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("authToken", data.authToken);

      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Show call/schedule message instead of login form
  if (scheduleMessage) {
    return (
      <main className="home-page-container">
        <section className="login-form">
          <div className="info-card">
            <h2>Action Required</h2>
            <p>{scheduleMessage.error}</p>
            <p>
              <strong>Scheduled Call:</strong> {scheduleMessage.schedule.date} at {scheduleMessage.schedule.time}
            </p>
            <p>
              <a href={scheduleMessage.schedule.link} target="_blank" rel="noopener noreferrer">
                Join Call
              </a>
            </p>
            <button onClick={() => setScheduleMessage(null)}>Back to Login</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="home-page-container">
      <section className="mental-health-img">
        <img src="/home-img.png" alt="Home-Img" />
      </section>

      <section className="login-form">
        <form onSubmit={handleLogin}>
          <h2>Login Here!</h2>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <p>
            Don't have an account? <span onClick={() => navigate("/signup")} style={{ color: "#4CAF50", cursor: "pointer" }}>Sign Up</span>
          </p>
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

export default Login;
