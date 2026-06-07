import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        © 2026 Joel Normand
      </div>

      <div className="footer-center">
        <img
          src={logo}
          alt="Elite Vet Clinic"
          className="footer-logo"
        />
      </div>

      <div className="footer-right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </footer>
  );
}

export default Footer;