import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ({ infos }) {
  return (
    <Card bsPrefix="home__card" className="border-0 rounded-0 text-black">
      <Card.Img
        src={infos.img}
        className="rounded-0 w-100 h-100 z-n1"
        alt="Card image"
      />
      <Card.ImgOverlay className="mt-4 ms-3">
        <Card.Text
          style={{ fontWeight: "bold", fontSize: ".8rem", margin: "0" }}
        >
          {infos.category}
        </Card.Text>
        <Card.Title
          style={{
            fontWeight: "bolder",
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
          }}
        >
          {infos.title}
        </Card.Title>
        <Card.Text style={{ fontSize: ".7rem" }}>{infos.caption}</Card.Text>
        <Link
          style={{ fontSize: ".7rem", fontWeight: "bold" }}
          className="btn btn-outline-dark"
          to={infos.link}
        >
          هم اکنون خرید کنید
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
}
