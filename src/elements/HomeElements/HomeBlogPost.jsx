import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Col, Row, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function HomeBlogPost({ infos }) {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    rtl: true,
    dots: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section>
      <h6 className="mt-5 h2">وبلاگ ما</h6>
      <Container fluid>
        <Slider {...settings}>
          {infos.map((val) => (
            <div key={val.id}>
              <Posts key={val.id} val={val} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
const Posts = ({ val }) => {
  return (
    <div className="p-3" style={{ height: "28rem" }}>
      <Row className="flex-column" dir="rtl">
        <Col>
          <Image className="w-100 h-100 rounded mb-2" src={val.img} />
        </Col>
        <Col>
          <p style={{ fontSize: ".8rem", opacity: ".7" }}>
            <span style={{ opacity: "1", fontWeight: "bold", color: "black" }}>
              {val.category}
            </span>{" "}
            - توسط
            <span style={{ opacity: "1", fontWeight: "bold", color: "black" }}>
              {" "}
              {val.author}
            </span>
          </p>
          <h6
            className="text-nowrap overflow-hidden"
            style={{ textOverflow: "ellipsis", fontSize: ".9rem" }}
          >
            {val.title}
          </h6>
          <p style={{ fontSize: ".75rem", opacity: ".7" }}>{val.description}</p>
          <Link
            className="btn btn-outline-dark fw-bolder"
            style={{ fontSize: ".65rem" }}
            to="/#"
          >
            ادامه مطلب <FaArrowLeftLong />
          </Link>
        </Col>
      </Row>
    </div>
  );
};
