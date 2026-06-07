import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BookNow() {
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    service: "",
    veterinarian: "",
    notes: "",
  });

  const navigate = useNavigate();

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");

    if (digits.length <= 3) return digits;

    if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }

    return `(${digits.slice(0, 3)}) ${digits.slice(
      3,
      6
    )}-${digits.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({
        ...formData,
        phone: formatPhoneNumber(value),
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (
      !formData.ownerName ||
      !formData.email ||
      !formData.phone ||
      !formData.petName ||
      !formData.petType ||
      !formData.service ||
      !formData.veterinarian
    ) {
      alert("Please complete all required fields.");
      return;
    }

    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    navigate("/calendar");
  };

  return (
    <main className="book-page">
      <section className="booking-progress progress-step-1">
        <div className="progress-step active">
          <span>1</span>
          <p>Details</p>
        </div>

        <div className="progress-step">
          <span>2</span>
          <p>Schedule</p>
        </div>

        <div className="progress-step">
          <span>3</span>
          <p>Confirm</p>
        </div>
      </section>

      <section className="booking-header">
        <h1>Book an Appointment</h1>
        <p>Complete the form below to schedule your pet's visit</p>
      </section>

      <form className="booking-form" onSubmit={handleNext}>
        <label>Owner Name</label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="(613) 555-1234"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Pet Name</label>
        <input
          type="text"
          name="petName"
          value={formData.petName}
          onChange={handleChange}
          required
        />

        <label>Pet Type</label>
        <select
          name="petType"
          value={formData.petType}
          onChange={handleChange}
          required
        >
          <option value="">Select Pet Type</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
        </select>

        <label>Requested Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Wellness Exam">Wellness Exam</option>
          <option value="Vaccination">Vaccination</option>
          <option value="Spaying & Neutering">Spaying & Neutering</option>
          <option value="Dental Care">Dental Care</option>
          <option value="Surgery">Surgery</option>
          <option value="Consultation">Consultation</option>
        </select>

        <label>Preferred Veterinarian</label>
        <select
          name="veterinarian"
          value={formData.veterinarian}
          onChange={handleChange}
          required
        >
          <option value="">Select Veterinarian</option>
          <option value="Dr. Sarah Mitchell">
            Dr. Sarah Mitchell
          </option>
          <option value="Dr. Michael Thompson">
            Dr. Michael Thompson
          </option>
          <option value="Dr. Emily Carter">
            Dr. Emily Carter
          </option>
          <option value="No Preference">
            No Preference
          </option>
        </select>

        <label>Additional Notes</label>
        <textarea
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">Next</button>
      </form>
    </main>
  );
}

export default BookNow;