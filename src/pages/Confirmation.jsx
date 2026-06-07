import { useNavigate } from "react-router-dom";
import confirmIcon from "../assets/greenConfirm.svg";
import "../App.css";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <main className="confirmation-page">
      <section className="booking-progress progress-step-3">
        <div className="progress-step completed">
          <span>1</span>
          <p>Details</p>
        </div>

        <div className="progress-step completed">
          <span>2</span>
          <p>Schedule</p>
        </div>

        <div className="progress-step active">
          <span>3</span>
          <p>Confirm</p>
        </div>
      </section>

      <section className="confirmation-content">
        <img
          src={confirmIcon}
          alt="Appointment Confirmed"
          className="confirmation-icon"
        />

        <h1>Appointment Confirmed!</h1>

        <div className="confirmation-card">
          <h2>Appointment Details</h2>

          <p>
            <strong>Pet Name:</strong> Toby
          </p>

          <p>
            <strong>Service:</strong> Wellness Exam
          </p>

          <p>
            <strong>Veterinarian:</strong> Dr. Sarah Mitchell
          </p>

          <p>
            <strong>Date:</strong> September 18, 2025 - 10:30 AM
          </p>

          <span>Confirmation email sent!</span>
        </div>

        <button
          className="return-home-btn"
          onClick={() => navigate("/")}
        >
          Return Home
        </button>
      </section>
    </main>
  );
}

export default Confirmation;