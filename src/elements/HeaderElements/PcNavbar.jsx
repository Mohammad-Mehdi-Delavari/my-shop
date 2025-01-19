import React from "react";
import Logo from "./Logo";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPhone, FaSearch } from "react-icons/fa";
import Navbar from "./Nav";
import NavIcons from "./NavIcons";

export default function PcNavbar() {
  return (
    <>
      <div
        className="d-md-flex p-2 bg-black text-white d-none d-lg-none"
        style={{ fontSize: ".7rem" }}
      >
        <p className="m-0 fw-light pe-3">7/24 با ما تماس بگیرید</p>
        <p className="m-0 fw-semibold">021-2222222</p>
      </div>
      <Container fluid className="d-none d-md-flex flex-column">
        <Row>
          <Col
            md={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Logo />
          </Col>
          <Col className="d-flex align-items-center" md={7}>
            <Col md={4} className="d-none d-lg-block">
              <Link
                className="red__hover d-flex text-black text-decoration-none"
                style={{ fontSize: ".8rem" }}
              >
                <Col md={2} className="fs-4 my-auto">
                  <FaPhone />
                </Col>
                <Col>
                  <p className="m-0 fw-light">7/24 با ما تماس بگیرید</p>
                  <p className="m-0 fw-semibold">021-2222222</p>
                </Col>
              </Link>
            </Col>
            <Col md={12} lg={8}>
              <form
                action=""
                style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                className="d-flex p-1 rounded"
              >
                <input
                  type="search"
                  placeholder="جستجوی محصولات..."
                  className="Header__search border-0 bg-transparent w-100"
                  style={{ outline: "none" }}
                />
                <button type="submit" className="btn btn-dark">
                  <FaSearch />
                </button>
              </form>
            </Col>
          </Col>

          <NavIcons />
        </Row>
        <Navbar />
      </Container>
    </>
  );
}
