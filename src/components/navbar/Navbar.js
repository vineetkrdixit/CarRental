import React from "react";
import Logo from "../images/logo.jpg";

import "../navbar/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  console.log(props);
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-bgcolor">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={Logo} alt="logo"></img>
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {props.isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    <span className="navbar-textcolor "> Home</span>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  <span className="navbar-textcolor "> About US</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ownerprofile">
                  <span className="navbar-textcolor "> Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  <span className="navbar-textcolor "> Contact US</span>
                </Link>
              </li>
              {!props.isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/alllogin">
                    <span className="navbar-textcolor ">Login/SignUp</span>
                  </Link>
                </li>
              )}
              {props.isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <span className="navbar-textcolor ">LogOut</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
