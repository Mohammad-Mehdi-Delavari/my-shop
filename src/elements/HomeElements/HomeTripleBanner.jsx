import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function HomeTripleBanner() {
  return (
    <section className="d-none d-md-block">
      <Container fluid className="mt-5">
        <Row className=" justify-content-center" style={{height:"15rem"}}>
          <Col lg={3} md={4} xs={12} style={{height:"15rem"}}>
            <Link to="#" className="text-decoration-none">
              <div className="w-100 h-100 position-relative d-flex flex-column justify-content-end align-items-center ">
                <Image
                  className="w-100 h-100 object-fit-cover rounded-2 position-absolute z-n1"
                  src="./images/tripleBanner/banner3-demo1.jpg"
                />
                <h5 className="text-white h3 fw-bolder lh-1">
                  فروش لاستیک
                  <br />
                  با 10% تخفیف
                </h5>
              </div>
            </Link>
          </Col>
          <Col style={{height:"15rem"}} lg={5} md={4} xs={12}>
            <div className="position-relative w-100 h-100 d-flex flex-column align-items-center">
              <Image
                className="w-100 h-100 object-fit-cover rounded-2 position-absolute z-n1"
                src="./images/tripleBanner/banner4-demo1.jpg"
              />
              <span className="h6 mt-3" style={{color:"#FB8C00",fontSize:".9rem"}}>کالکشن جدید</span>
              <h6 className="h4 mb-3">مبل ساخته شده در ایران</h6>
              <Link to="#" style={{fontSize:".7rem"}} className="btn btn-outline-dark">اکنون خرید کنید</Link>
            </div>
          </Col>
          <Col style={{height:"15rem"}} lg={3} md={4} xs={12}>
            <div className="w-100 h-100 position-relative d-flex flex-column justify-content-end align-items-center">
              <Image
                className="w-100 h-100 position-absolute object-fit-cover rounded-2 z-n1" 
                src="./images/tripleBanner/banner5-demo1.jpg"
              />
              <span className="position-absolute text-white-50 mb-3 h1 z-0">آرایشی</span>
              <span className="mb-5 text-white h4 z-3">زیر قیمت بازار</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
