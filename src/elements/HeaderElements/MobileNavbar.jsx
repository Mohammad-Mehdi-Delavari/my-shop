import { Container, Navbar, Row, Col, Offcanvas } from "react-bootstrap";
import Nav from "./Nav";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import React, { useState } from "react";

export default function MobileNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid className="d-flex align-items-center d-md-none">
      <Row className="align-items-center w-100">
        <Col xs={3}>
          <Navbar expand="lg">
            <Navbar.Toggle
              onClick={handleShow}
              aria-controls="basic-navbar-nav"
              className="border-0"
            />
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>منو</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav />
              </Offcanvas.Body>
            </Offcanvas>

            {/* <Navbar.Collapse id="basic-navbar-nav">
              
            </Navbar.Collapse> */}
          </Navbar>
        </Col>
        <Col xs={6}>
          <Logo />
        </Col>
        <NavIcons />
      </Row>
    </Container>
  );
}
