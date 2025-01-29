import React from "react";
import { Image } from "react-bootstrap";

export default function HomeBrandSliderItems({ img, title }) {
  return (
    <>
    <div className="d-flex flex-column align-items-center">
      <div
        style={{
          width: "10rem",
          height: "10rem",
        }}
        className="rounded-circle p-3"
      >
        <Image src={img} className=" object-fit-contain w-100 rounded-circle" />
      </div>
      <h5
        className="mt-2 h6"

      >
        {title}
      </h5>
      </div>
    </>
  );
}
