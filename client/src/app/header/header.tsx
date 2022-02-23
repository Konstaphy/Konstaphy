import React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Konstaphy</div>
      <ul className="header__links">
        <li>About me</li>
        <li>Stack</li>
        <li>Purposes</li>
        <li>Demos</li>
      </ul>
    </header>
  );
};

export default Header;
