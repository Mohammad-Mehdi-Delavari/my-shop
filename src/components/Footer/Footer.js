import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../elements/HeaderElements/Logo";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSearch, FaInstagram, FaRegSmile } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-3">
      <Container className="pt" fluid>
        <Row>
          <Col lg={3} xs={6}>
            <Logo color="#F5F5F5" />
            <p style={{ color: "#9E9E9E", fontSize: ".85rem" }}>
              <IoLocationOutline /> ایران ، تهران بزرگ
            </p>
            <p style={{ color: "#9E9E9E", fontSize: ".85rem" }}>
              <MdOutlineMailOutline /> info@example.com
            </p>
            <a
              className="text-white red__hover text-decoration-none h6 "
              href="tel:123456789"
            >
              021-87654321
            </a>
          </Col>
          <Col lg={2} xs={6}>
            <h6
              style={{
                fontSize: ".8rem",
                fontWeight: "bolder",
                paddingBottom: ".7rem",
                marginTop: "2rem",
              }}
            >
              {" "}
              فروشگاه
            </h6>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                فهرست علاقه مندی ها
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                برندها{" "}
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                تخفیف ها
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                پیگیری سفارش
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                راهنمای اندازه
              </Link>
            </p>
          </Col>
          <Col lg={2} xs={6}>
            <h6
              style={{
                fontSize: ".8rem",
                fontWeight: "bolder",
                paddingBottom: ".7rem",
                marginTop: "2rem",
              }}
            >
              اطلاعات
            </h6>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                پشتیبان سفارشات
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                روش ارسال
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                درباره ما
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                راهنما
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                کارت هدیه
              </Link>
            </p>
          </Col>
          <Col lg={2} xs={6}>
            <h6
              style={{
                fontSize: ".8rem",
                fontWeight: "bolder",
                paddingBottom: ".7rem",
                marginTop: "2rem",
              }}
            >
              {" "}
              حساب کاربری
            </h6>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                سبد خرید
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                حساب کاربری
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                سفارشات
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                علاقه مندی ها
              </Link>
            </p>
            <p className="m-0">
              {" "}
              <Link
                className="red__hover text-white text-decoration-none"
                style={{ fontSize: ".7rem" }}
                to="#"
              >
                {" "}
                بازاریابی
              </Link>
            </p>
          </Col>
          <Col lg={3} xs={6} className="d-lg-block d-none">
            <h6 style={{ marginTop: "2rem" }}>بیایید در تماس باشیم</h6>
            <form
              action=""
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              className="d-flex p-1 rounded"
            >
              <input
                type="search"
                placeholder="آدرس ایمیل را وارد کنید"
                className="Header__search border-0 text-white bg-transparent w-100"
                style={{ outline: "none" }}
              />
              <button type="submit" className="btn btn-dark">
                <FaSearch />
              </button>
            </form>
            <div className="d-flex">
              <span className="mt-3">
                <a className="red__hover text-white px-2 fs-5" href="#">
                  <FaXTwitter />
                </a>
              </span>
              <span className="mt-3">
                <a className="red__hover text-white px-2 fs-5" href="#">
                  <FaInstagram />
                </a>
              </span>
              <span className="mt-3">
                <a className="red__hover text-white px-2 fs-5" href="#">
                  <FiFacebook />
                </a>
              </span>
              <span className="mt-3">
                <a className="red__hover text-white px-2 fs-5" href="#">
                  <FiYoutube />
                </a>
              </span>
              <span className="mt-3">
                <a className="red__hover text-white px-2 fs-5" href="#">
                  <PiTiktokLogo />
                </a>
              </span>
            </div>
          </Col>
        </Row>
        <Row
          className="rounded gap-5 gap-lg-0 mt-4 py-4 px-5"
          style={{ border: ".5px solid rgba(255,255,255,0.2)" }}
        >
          <Col className="d-flex" lg={4} xs={12}>
            <Col xs={1} className="me-2">
              <HiOutlinePhone className="h3" />
            </Col>
            <Col>
              <p
                style={{ fontSize: ".9rem", fontWeight: "bolder", margin: "0" }}
              >
                چیزی را که دنبالش بودید پیدا نکردید؟
              </p>
              <Link
                className=" red__hover text-white text-decoration-none"
                to="#"
                style={{ fontSize: ".8rem" }}
              >
                ارتباط با ما
              </Link>
            </Col>
          </Col>
          <Col className="d-flex" lg={4} xs={12}>
            <Col xs={1} className="me-2">
              <FaRegSmile className="h3" />
            </Col>
            <Col>
              <p
                style={{ fontSize: ".9rem", fontWeight: "bolder", margin: "0" }}
              >
                چگونه می توانیم به شما کمک کنیم؟
              </p>
              <Link
                className="red__hover text-white text-decoration-none"
                to="#"
                style={{ fontSize: ".8rem" }}
              >
                مرکز راهنما
              </Link>
            </Col>
          </Col>
          <Col className="d-flex" lg={4} xs={12}>
            <Col xs={1} className="me-2">
              <IoHelpBuoyOutline className="h3" />
            </Col>
            <Col>
              <p
                style={{ fontSize: ".9rem", fontWeight: "bolder", margin: "0" }}
              >
                ما دوست داریم نظر شما را بشنویم!
              </p>
              <Link
                className="red__hover text-white text-decoration-none"
                to="#"
                style={{ fontSize: ".8rem" }}
              >
                بازخورد بدهید
              </Link>
            </Col>
          </Col>
        </Row>
        <Row className="py-4">
          <Col  md={6} xs={12}>
            <span className="d-block text-center text-md-start " style={{ fontSize: ".7rem", color: "rgba(255,255,255,0.5)" }}>
              کپی رایت © من. تمامی حقوق محفوظ است
            </span>
          </Col>
          <Col
            md={6}
            xs={12}
            className="d-flex justify-content-center mt-3 mt-md-0 justify-content-md-end"
          >
            <Image className="w-50 h-100" src="./images/payment-icons-1.png" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
