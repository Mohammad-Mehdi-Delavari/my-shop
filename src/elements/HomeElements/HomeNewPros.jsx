import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeNewPros({infos}) {
  return (
    <section>
      <Container className="mt-5" fluid>
      <h4 className="mb-4">جدیدترین محصولات</h4>
        <Row>
          {infos.map((val) => (
            <ProsBox key={val.id} infos={val} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

const ProsBox = ({ infos }) => {

  return (
    <Col
      className="border border-1 d-flex p-3 align-items-center"
      style={{ height: "12rem" }}
      lg={4}
      sm={6}
      xs={12}
    >
      <Col className="position-relative" xs={5}>
        <Image src={infos.img} className="w-100 h-100 object-fit-cover p-3 " />
      </Col>
      <Col>
        <h5 className="fw-bolder" style={{ fontSize: ".7rem" }}>
          {infos.title}
        </h5>
        <p style={{ fontWeight: "bold", fontSize: ".9rem" }}>
          {infos.price} تومان
        </p>
        <Link
          to={infos.link}
          className="btn btn-danger text-white"
          style={{ fontSize: ".7rem" }}
        >
          افزودن به سبد خرید
        </Link>
      </Col>
    </Col>
  );
};
