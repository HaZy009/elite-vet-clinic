import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-5">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Elite Vet Clinic Logo" className="logo-img" />
        </NavLink>

        <div className="navbar-nav ms-auto align-items-center">
          <NavLink className="nav-link custom-nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link custom-nav-link" to="/services">
            Services
          </NavLink>

          <NavLink className="nav-link custom-nav-link" to="/shop">
            Shop
          </NavLink>

          <NavLink className="nav-link custom-nav-link" to="/contact">
            Contact
          </NavLink>

          <NavLink className="btn book-now-btn" to="/book-now">
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
