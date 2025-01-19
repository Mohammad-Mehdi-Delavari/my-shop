import React from "react";
import MobileNavbar from "../../elements/HeaderElements/MobileNavbar";
import PcNavbar from "../../elements/HeaderElements/PcNavbar";
export default function Header() {
  return (
    <header>
    <MobileNavbar/>
    <PcNavbar />
    </header>
  );
}
