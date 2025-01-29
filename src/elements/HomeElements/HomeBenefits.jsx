import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TbTruckDelivery, TbRosetteDiscount } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";

export default function () {
  return (
    <section>
      <Container
        style={{ gap: "2rem" }}
        className="d-flex justify-content-center pt-5"
      >
        <Row>
          <Col lg={3} xs={6} className="mb-3 d-flex">
            <div>
              <TbTruckDelivery
                className="my-auto text-secondary me-3"
                style={{ fontSize: "2.5rem" }}
              />
            </div>
            <div>
              <h5 style={{ fontSize: "1rem", fontWeight: "bolder" }}>
                ارسال رایگان و سریع
              </h5>
              <p style={{ fontSize: ".7rem" }}>با سفارش بالای 100 هزار تومان</p>
            </div>
          </Col>
          <Col lg={3} xs={6} className="mb-3 d-flex">
            <div>
              <CiClock2
                className="my-auto text-secondary me-3"
                style={{ fontSize: "2.5rem" }}
              />
            </div>
            <div>
              <h5 style={{ fontSize: "1rem", fontWeight: "bolder" }}>
                تحویل روز بعد
              </h5>
              <p style={{ fontSize: ".7rem" }}>رایگان برای سفارشات بالا</p>
            </div>
          </Col>
          <Col lg={3} xs={6} className="mb-3 d-flex">
            <div>
              <TbRosetteDiscount
                className="my-auto text-secondary me-3"
                style={{ fontSize: "2.5rem" }}
              />
            </div>
            <div>
              <h5 style={{ fontSize: "1rem", fontWeight: "bolder" }}>
                تضمین قیمت پایین
              </h5>
              <p style={{ fontSize: ".7rem" }}>
                ما قیمت های رقابتی را ارائه می دهیم
              </p>
            </div>
          </Col>
          <Col lg={3} xs={6} className="mb-3 d-flex">
            <div>
              <AiOutlineLike
                className="my-auto text-secondary me-3"
                style={{ fontSize: "2.5rem" }}
              />
            </div>
            <div>
              <h5 style={{ fontSize: "1rem", fontWeight: "bolder" }}>
                تضمین کیفیت
              </h5>
              <p style={{ fontSize: ".7rem" }}>
                ما محصولات خود را تضمین می کنیم
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
