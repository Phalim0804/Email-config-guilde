import React from "react";
import "./navBar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavIcon from "../../assets/NavbarIcon.png";
import Arrowdown from "../../assets/ArrowDown.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const footerElement = document.getElementById("aboutUs");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const footerElement = document.getElementById("aboutUs");
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const footerElement = document.getElementById("footer");
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav>
      <div className="leftNav">
        <Link to="/" onClick={handleHomeClick}>
          <img src={NavIcon} alt="Navigation Icon" />
        </Link>
        <Link to={"/"} onClick={handleHomeClick}>
          <h1>
            <a href="">GUIDELINE</a>
          </h1>
        </Link>
      </div>
      <div className="rightNav">
        <ul>
          <li>
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#aboutUs" onClick={handleAboutClick}>
              About us
            </Link>
          </li>
          <li className="dropdown">
            <span className="dropdown-title">Guild</span>
            <img src={Arrowdown} alt="Arrow Down" className="arrow-down" />
            <ul className="dropdown-content">
              <li>
                <Link to="/thunderbird">Thunderbird</Link>
              </li>
              <li>
                <Link to="/outlook">Outlook</Link>
              </li>
              <li>
                <Link to="/gmail">Gmail</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" onClick={handleContactClick}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
