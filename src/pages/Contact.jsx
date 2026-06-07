import catContact from "../assets/catContact.svg";
import "../App.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-left">
          <h1>Contact Information</h1>

          <p>
            Have questions about our services?
            <br />
            Our team is here to help.
          </p>
        </div>

        <div className="contact-hero-right">
          <img src={catContact} alt="Cat paw contact banner" />
        </div>
      </section>

      <section className="info-cards-section">
        <div className="info-card">
          <h3>📍 Location</h3>
          <p>
            123 Wellington Street
            <br />
            Ottawa, ON K1A 0A1
          </p>
          <span>Free on-site parking</span>
        </div>

        <div className="info-card">
          <h3>📞 Contact Us</h3>
          <p>(613) 555-1234</p>
          <p>info@elitevetclinic.com</p>
        </div>

        <div className="info-card">
          <h3>🕒 Opening Hours</h3>
          <p>
            Monday - Friday: 8:00 AM - 6:00 PM
            <br />
            Saturday: 9:00 AM - 2:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </section>

      <section className="contact-footer">
        <h2>Need More Information?</h2>

        <p>
          Contact us by phone or email and our team will be
          <br />
          happy to answer your questions.
        </p>
      </section>
    </main>
  );
}

export default Contact;