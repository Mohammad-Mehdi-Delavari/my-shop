import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
export default function HomeDiscountItems({infos,title}) {
  const settings = {
    infinite: true,
    slidesToScroll: 2,
    rtl: true,
    dots: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <h6 className="mt-5 h2"> {title}</h6>
      <Container fluid>
        <Slider {...settings}>
          {infos.map((val) => (
            <div key={val.id}>
              <Items key={val.id} {...val} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

const Items = ({ img, title, price, discount, link }) => {
  let dis = price - (price / 100) * discount;
  return (
    <Link to={link} className="text-black text-decoration-none">
      <div lg={2} className="border d-flex flex-column align-items-end mt-3">
        <div className="w-100 position-relative w-75">
          <img src={img} className="w-100 h-100" alt={title} />
          <span
            style={{ height: "1rem", fontSize: ".8rem" }}
            className="bg-danger rounded-1 px-2 position-absolute top-0 start-0 mt-3 ms-3 text-white"
          >
            %{discount}
          </span>
        </div>
        <h5
          className="fw-light ms-2 p-0"
          style={{ fontSize: ".8rem", height: "1.5rem" }}
        >
          {title}
        </h5>
        <div className="ms-2 pb-4" dir="rtl">
          <span
            style={{
              fontSize: ".8rem",
              fontWeight: "bold",
              marginLeft: ".5rem",
            }}
          >
            {dis}تومان{" "}
          </span>
          <del style={{ color: "#BDBDBD" }}>{price}</del>
        </div>
      </div>
    </Link>
  );
};
