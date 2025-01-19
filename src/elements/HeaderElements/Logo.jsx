import React from "react";
import { Link } from "react-router-dom";
export default function Logo({color}) {
  let logoColor = "#37474F"
  if(color){
    logoColor=color
  }
  return (
    <Link to="/" className="d-block w-75 m-auto text-center text-decoration-none">
      <p
        className="d-block p-0 "
        style={{
          fontSize: "300%",
          fontFamily: "Jaro",
          color: logoColor,
        }}
      >
        shop
      </p>
    </Link>
  );
}
