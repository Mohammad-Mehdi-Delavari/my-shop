import React from "react";
import { Col } from "react-bootstrap";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Col
      className="d-flex justify-content-center align-items-center gap-3"
      
      xs={3}
      
    >
      <Link className="text-black d-none d-md-inline-block text-decoration-none fs-5">
        <CiUser />
        <span
          className="d-none d-lg-inline"
          style={{ fontSize: ".8rem", fontWeight: "500" }}
        >
          حساب کاربری
        </span>
      </Link>
      <Link className="text-black text-decoration-none position-relative fs-5">
        <CiHeart />
        <span className="num">0</span>
      </Link>
      <Link className="text-black text-decoration-none position-relative fs-5">
        <CiShoppingCart />
        <span className="num">0</span>
      </Link>
    </Col>
  );
}
