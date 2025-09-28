import { useState } from "react";
import "./Login-Signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

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
          <p>Don't have an accout?</p>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
