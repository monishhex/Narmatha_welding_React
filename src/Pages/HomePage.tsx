import { Button, Col, Input } from "antd";

const HomePage: React.FC = () => {
    return (
    <div>
      {/* HEADER */}
      <header className="header">
        <h1>Narmatha Welding And Roofing Works</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>
          Strong. Durable. <br />
          <span>Reliable Welding Solutions</span>
        </h2>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">Gate Welding</div>
          <div className="card">Grill Works</div>
          <div className="card">Steel Fabrication</div>
          <div className="card">Custom Design</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Providing quality welding with precision and strength. Trusted by
          hundreds of customers.
        </p>
      </section>

      {/* CONTACT */}
      <div
  style={{
    display: "grid",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "20px",
  }}
>
  <Col md={8}>
    <h2 style={{ textAlign: "center" }}>Contact Us</h2>

    <Input
      type="text"
      placeholder="Your Name"
      style={{ marginBottom: "10px" }}
    />

    <Input
      type="email"
      placeholder="Your Email"
      style={{ marginBottom: "10px" }}
    />

    <textarea
      placeholder="Your Message"
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    />

    <Button type="primary" block>
      Send Message
    </Button>
  </Col>
</div>
      {/* FOOTER */}
      <footer>
        <p>© 2026 Narmatha Welding ANd Roofing Works</p>
      </footer>
    </div>
  );}
export default HomePage;