import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiDiscount1 } from "react-icons/ci";

export default function Navbar() {
  return (
    <Nav
      className="mt-md-3 fw-bold justify-content-start gap-md-5 gap-3 justify-content-md-center d-flex flex-md-row flex-column"
      activeKey="/"
    >
      <Nav.Item>
        <Link
          className="text-black  red__hover text-decoration-none"
          style={{ fontSize: ".8rem" }}
          to="/"
        >
          صفحه اصلی
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className="text-black red__hover text-decoration-none"
          style={{ fontSize: ".8rem" }}
          to="#"
        >
          دسته بندی ها
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className="text-black red__hover text-decoration-none"
          style={{ fontSize: ".8rem" }}
          to="#"
        >
          فروشگاه
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className="text-black red__hover text-decoration-none"
          style={{ fontSize: ".8rem" }}
          to="#"
        >
          درباره ما
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className="text-black red__hover text-decoration-none"
          style={{ fontSize: ".8rem" }}
          to="#"
        >
          وبلاگ
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className="text-black red__hover text-decoration-none"
          style={{ fontSize: ".8rem" }}
          to="#"
        >
          <CiDiscount1 className="fs-4  me-md-2" />
          بهترین تخفیف ها
        </Link>
      </Nav.Item>
    </Nav>
  );
}
