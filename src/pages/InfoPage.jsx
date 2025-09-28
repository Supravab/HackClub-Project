// src/pages/InfoPage.js

import { useLocation, useNavigate } from "react-router-dom";
import "./InfoPage.css"; // create custom styles

function InfoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Message passed via navigate()
  const message = location.state?.message || "No information available.";

  return (
    <main className="info-page-container">
      <div className="info-card">
        <h2>Notice</h2>
        <p>{message}</p>
        <button onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    </main>
  );
}

export default InfoPage;
