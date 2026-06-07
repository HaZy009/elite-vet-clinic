import "../App.css";

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Explore the veterinary services available for your pet.</p>
        </div>
      </section>

      <section className="services-grid">
        <div className="service-card light-card">
          <h3>🐾 Wellness Exams</h3>
          <h4>Description:</h4>
          <p>
            Regular health checkups help detect potential issues early and
            ensure your pet stays healthy throughout every stage of life.
          </p>

          <h4>Includes:</h4>
          <ul>
            <li>Physical examination</li>
            <li>Weight monitoring</li>
            <li>Preventive recommendations</li>
          </ul>
        </div>

        <div className="service-card light-card">
          <h3>💉 Vaccinations</h3>
          <h4>Description:</h4>
          <p>
            Vaccinations protect pets against common diseases and help maintain
            long-term health and safety.
          </p>

          <h4>Includes:</h4>
          <ul>
            <li>Core vaccines</li>
            <li>Booster schedules</li>
            <li>Vaccination records</li>
          </ul>
        </div>

        <div className="service-card light-card">
          <h3>✂️ Spaying & Neutering</h3>
          <h4>Description:</h4>
          <p>
            Spaying and neutering are common procedures that help prevent
            unwanted litters and provide several health benefits.
          </p>

          <h4>Includes:</h4>
          <ul>
            <li>Prevents unwanted pregnancies</li>
            <li>Reduces certain health risks</li>
            <li>Supports long-term wellbeing</li>
          </ul>
        </div>

        <div className="service-card dark-card">
          <h3>🦷 Dental Care</h3>
          <h4>Description</h4>
          <p>
            Good oral health is essential for your pet's overall wellbeing.
          </p>

          <h4>Includes</h4>
          <ul>
            <li>Dental cleaning</li>
            <li>Oral examination</li>
            <li>Preventive treatment</li>
          </ul>
        </div>

        <div className="service-card dark-card">
          <h3>🏥 Surgery</h3>
          <h4>Description</h4>
          <p>
            We provide a range of surgical procedures performed in a safe and
            professional environment.
          </p>

          <h4>Includes</h4>
          <ul>
            <li>Routine procedures</li>
            <li>Surgical consultations</li>
            <li>Post-operative care</li>
          </ul>
        </div>

        <div className="service-card dark-card">
          <h3>📋 Consultations</h3>
          <h4>Description</h4>
          <p>
            Meet with our veterinary team to discuss concerns, symptoms,
            treatment options, and preventive care.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Services;