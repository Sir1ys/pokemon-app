import React from "react";
import "./header.scss";
import header from '../../images/header.png';

export default function Header() {
  return (
    <div className="header">
      <img src={header} alt="logo" className="logo" />
    </div>
  );
}
