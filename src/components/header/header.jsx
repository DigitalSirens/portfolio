import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
        </Navbar>
      </div>
    </>
  );
}