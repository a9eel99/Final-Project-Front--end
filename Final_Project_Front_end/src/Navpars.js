import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navpars() {
  const [btnlog, setbtnlog] = useState(false);
  const [btnsign, setbtnsign] = useState(false);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm py-2"
      style={{ fontWeight: "bold" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/image/logo.png" alt="Logo" style={{ height: "40px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto m-3">
            <Nav.Link as={Link} to="/home" className="active">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className="active">About Us</Nav.Link>
            <Nav.Link as={Link} to="/Courses" className="active">Courses</Nav.Link>
            <Nav.Link as={Link} to="/Blog" className="active">Blog</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="active">
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center me-3">
            <FaSearch
              style={{
                fontSize: "25px",
                cursor: "pointer",
                marginRight: "25px",
                color: "#9AA3B1",

              }}
            />

            <div style={{ position: "relative", marginRight: "25px" }}>
              <FaShoppingCart
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  marginRight: "100px",
                  color: "#9AA3B1",
                }}
              />
              <Badge
                bg="success"
                pill
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "+75px",
                  fontSize: "15px",
                }}
              >
                0
              </Badge>
            </div>
          </div>

          <Button
            variant=""
            className="me-2 btn-login"
            style={{
              borderRadius: "30px",
              padding: "10px 30px",
              fontSize: "15px",
              backgroundColor: "#61CE70",
              color: "white",
              border: "none",
            }}
          >
            <span>{btnlog ? "Contact" : "Login"}</span>
          </Button>

          <Button
            variant="outline-success"
            style={{
              borderRadius: "30px",
              padding: "10px 30px",
              fontSize: "15px",
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {btnsign ? "Account" : "Sign Up"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
