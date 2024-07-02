import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function handlePageChange(page) {
  console.log("Page changed to:", page);
}

export default function Header() {
  return (
    <>
      <div id="header">
        <Navbar bg="light">
          <Nav className="me-auto text-black">
            <Nav.Link href="/" onClick={() => handlePageChange("Home")}>
              Home
            </Nav.Link>
            <Nav.Link href="/Portfolio" onClick={() => handlePageChange("About")}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/Contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com/digitalsirens" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/digital.sirens" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}