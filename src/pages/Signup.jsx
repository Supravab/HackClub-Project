import { useState } from "react";
import "./Login-Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <main className="home-page-container">
      <section className="mental-health-img">
        <img src="/home-img.png" alt="Home-Img" />
      </section>

      <section className="login-form">
        <form onSubmit={handleSignup}>
          <h1>Sign Up Here!</h1>

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

          <button type="submit">Sign Up</button>
        </form>
      </section>
    </main>
  );
}

export default Signup;
