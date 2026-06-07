import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Calendar() {
  const navigate = useNavigate();

  const availableDates = {
    9: ["10:00 AM", "11:00 AM", "3:00 PM", "4:30 PM"],
    13: ["9:30 AM", "1:00 PM", "2:30 PM"],
    18: ["10:30 AM", "12:00 PM", "4:00 PM"],
    24: ["8:30 AM", "11:30 AM", "3:30 PM"],
  };

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateClick = (day) => {
    if (!availableDates[day]) return;

    setSelectedDate(day);
    setSelectedTime("");
  };

  const handleNext = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }

    navigate("/confirmation");
  };

  return (
    <main className="calendar-page">
      <section className="booking-progress progress-step-2">
        <div className="progress-step completed">
          <span>1</span>
          <p>Details</p>
        </div>

        <div className="progress-step active">
          <span>2</span>
          <p>Schedule</p>
        </div>

        <div className="progress-step">
          <span>3</span>
          <p>Confirm</p>
        </div>
      </section>

      <section className="booking-header">
        <h1>Choose Date and Time</h1>
        <p>Select an available appointment slot for your pet's visit</p>
      </section>

      <section className="calendar-card">
        <div className="calendar-top">
          <button>‹</button>
          <select defaultValue="September">
            <option>September</option>
          </select>
          <select defaultValue="2025">
            <option>2025</option>
          </select>
          <button>›</button>
        </div>

        <div className="calendar-weekdays">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>

        <div className="calendar-days">
          <span></span>
          {days.map((day) => (
            <button
              key={day}
              className={`
                calendar-day
                ${availableDates[day] ? "available" : ""}
                ${selectedDate === day ? "selected" : ""}
              `}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </section>

      {selectedDate && (
        <section className="time-section">
          <h2>Available Times for September {selectedDate}, 2025</h2>

          <div className="time-list">
            {availableDates[selectedDate].map((time) => (
              <button
                key={time}
                className={selectedTime === time ? "selected-time" : ""}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="calendar-buttons">
        <button className="previous-btn" onClick={() => navigate("/book-now")}>
          ← Previous
        </button>

        <button className="next-btn" onClick={handleNext}>
          Next →
        </button>
      </section>
    </main>
  );
}

export default Calendar;