import React from "react";
import propTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            {props.text}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  {props.home}
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={props.toggleMode}
          />
          <label
            className={`form-check-lable text-${
              props.mode === "light" ? "dark" : "light"
            }`} //ternary operator
            htmlfor="flexSwitchCheckDefault"
          >
            <small>{props.switchText}</small>
            {props.mode === "light" ? (
              <FaMoon style={{ marginLeft: "5px" }} />
            ) : (
              <FaSun style={{ marginLeft: "5px" }} />
            )}
          </label>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: propTypes.string.isRequired };

Navbar.defaultProps = {
  title: "Set title here",
};
export default Navbar;
