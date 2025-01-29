import React from "react";
import { Container, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function HomeSearchBox() {
  return (
    <section style={{ backgroundColor: "#ECEFF1" }}>
      <Container className="d-flex flex-column align-items-center p-5">
        <p className="h4 mb-5">به دنبال چیز دیگری هستید؟</p>
        <Col md={12} lg={8}>
          <form
            action="/"
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
      </Container>
    </section>
  );
}
