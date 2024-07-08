import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function handlePageChange(page) {
  console.log("Page changed to:", page);
}

export default function Header() {
  return (
    <>
      <div id="header">
        <Navbar bg="light">
          <Nav className="me-auto navbar-nav text-black">
            <div className="nav-links">
              <Nav.Link
                className="home-link"
                href="/"
                onClick={() => handlePageChange("Home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="portfolio-link"
                href="/Portfolio"
                onClick={() => handlePageChange("About")}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                className="contact-link"
                href="/Contact"
                onClick={() => handlePageChange("Contact")}
              >
                Contact
              </Nav.Link>
            </div>
            <div className="social-links">
              <Nav.Link
                className="facebook-link"
                href="https://www.facebook.com/digitalsirens"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
              <Nav.Link
                className="instagram-link"
                href="https://www.instagram.com/digital.sirens"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}