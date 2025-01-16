import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Jammming App</div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#search">Buscar</a></li>
          <li><a href="#about">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
