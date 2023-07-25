import { useState } from "react";
//import logo from '../logo.png';
import logo from "../s4b-logo-noback.png";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";

//React Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";

import Login from './Login';


//Imports Boostrap---------
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//loader Imports--------------
import { HashLoader } from "react-spinners";

axios.defaults.withCredentials = true;

const Navbar = () => {
  //login code ----------------------------------------

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const goToLogin = (event) => {
    isloggedin();
  };

  //funcion to check if you are logged in already
  const isloggedin = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //axios.get(variables.API_URL, {withCredentials: true})
    axios
      .get("http://localhost:5000/CheckingIsLoggedIn", config)
      .then((res) => {
        setUser(res.data);
        console.log("here is the response data...", res.data);
        console.log("here is the response user name...", res.data.user);
        //forward it to the home page
        navigate("/main", { userInfo: { user } });
      })
      .catch((error) => {
        setUser("");
      })
      .then(function () {
        setLogin(!login);
      });
  };

  //End login code ----------------------------------------

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <p className="logo-name">S4B Consulting</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}

              <li className="nav-item">
                <Link
                  smooth={true}
                  to="home"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="nav-link"
                  href="#"
                >
                  about me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="services"
                  offset={-110}
                  className="nav-link"
                  href="#"
                >
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-110}
                  className="nav-link"
                  href="#"
                >
                  experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  className="nav-link"
                  href="#"
                >
                  portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-110}
                  className="nav-link"
                  href="#"
                >
                  contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link offset={-110} className="nav-link" href="#" onClick={goToLogin}>
                  Login
                </Link>
                
                  {login ? (
                    <>
                      <i
                        className="bi bi-arrow-bar-left"
                        onClick={goToLogin}
                      ></i>{" "}
                      <br />
                      Back
                    </>
                  ) : (
                    <>
                      <i
                        className="bi bi-box-arrow-in-right"
                        onClick={goToLogin}
                      ></i>{" "}
                      <br />
                      Login
                    </>
                  )}
                
              </li>
            </ul>
          </div>
        </div>
      </nav>



      {/* modal */}
      <div>
            {login ? (
              user ? (
                <div className="spinner">
                  <HashLoader />
                </div>
              ) : (
                <>
                  <div className="modal-container">
                    <Modal
                      show={login}
                      size="lg"
                      onHide={() => setLogin(false)}
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header
                        closeButton
                        closeVariant='white'
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor:"#212529",
                          
                        }}
                      >
                        <img
                          src={logo}
                          alt="logo"
                          className="s4b-logo2"
                        //   className="col-md-2 col-2 text-center mb-0"
                          
                        />
                        <Modal.Title
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            margin: "auto",
                          }}
                        >
                          <p className="headerLogin" style={{ color: "#72bfbe", margin:"auto" }}>
                            Welcome to S4B Members Area
                          </p>
                        </Modal.Title>
                      </Modal.Header>

                      <Login />
                      

                      <Modal.Footer>
                        <div className="form-footer">
                          <img src={logo} alt="logo" className="s4b-logo" />
                          <p className="mt-3 mb-3 text-muted">
                            Power by S4B-Consulting &copy; 2021
                          </p>
                        </div>
                        <Button variant="secondary" size="sm">
                          Forgot your Password?
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </>
              )
            ) : (
              ""
            )}
          </div>
      {/* End modal */}





    </>
  );
};

export default Navbar;
