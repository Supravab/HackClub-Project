import { useLocation, useNavigate } from "react-router-dom";
import "./InfoPage.css";

function InfoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const message = location.state?.message || "No information available.";
  const meetingLink = location.state?.meetingLink;

  const handleRedirect = () => {
    if (meetingLink) {
      localStorage.setItem("meetingLink", meetingLink); // store for JoinSession
      navigate("/join-session");
    } else {
      navigate("/login");
    }
  };

  return (
    <main className="info-page-container">
      <div className="info-card">
        <h2>Notice</h2>
        <p>{message}</p>
        <button onClick={handleRedirect}>
          {meetingLink ? "Join Session" : "Back to Login"}
        </button>
      </div>
    </main>
  );
}

export default InfoPage;
