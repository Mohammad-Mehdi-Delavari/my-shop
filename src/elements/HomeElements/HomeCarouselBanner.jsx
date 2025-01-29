import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import HomeBanner from "./HomeBanner";

export default function HomeCarouselBanner({infos}) {
  return (
    <Container fluid className="mt-4">
      <Row className="align-items-center flex-lg-row flex-column">
        <Col className="p-0 bg-black h-50" xs={12} lg={8}>
          <HomeCarousel />
        </Col>
        <Col className="p-0 d-md-flex d-block d-lg-block" xs={12} lg={4}>
          <Col xs={12} md={6} lg={12}>
            <HomeBanner infos={infos[0]} />
          </Col>
          <Col xs={12} md={6} lg={12}>
            <HomeBanner infos={infos[1]} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
