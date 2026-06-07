import dogHome from "../assets/dogHome.svg";
import catHome from "../assets/catHome.svg";
import "../App.css";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Exceptional Care <br />
            for the Animals You <br />
            Love Most
          </h1>

          <p>
            Providing trusted veterinary services with compassion and expertise.
          </p>
        </div>

        <div className="hero-image-container">
          <img src={dogHome} alt="Veterinarian holding a dog" className="hero-dog-img" />
        </div>
      </section>

      <section className="info-cards-section">
        <div className="info-card">
          <h3>📍 Location</h3>
          <p>
            123 Wellington Street <br />
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
            Monday - Friday: 8:00 AM - 6:00 PM <br />
            Saturday: 9:00 AM - 2:00 PM <br />
            Sunday: Closed
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img src={catHome} alt="Cat standing" />
        </div>

        <div className="about-content">
          <h2>About Elite Vet Clinic</h2>
          <h4>Trusted Veterinary Care for Dogs and Cats</h4>

          <p>
            At Elite Vet Clinic, we are dedicated to providing compassionate and
            professional care for your pets. Our experienced team offers
            preventive care, wellness exams, vaccinations, and medical treatments
            to help your companions live healthy and happy lives.
          </p>

          <p>
            Whether your pet needs a routine checkup or specialized attention,
            we're here to help every step of the way.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;