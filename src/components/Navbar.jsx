import React from "react";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="logo">Cafe <span className="accent">Italian</span></div>
        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <button className="cta">Order</button>
        </nav>
        <button className="hamburger" aria-label="Toggle menu">☰</button>
      </div>
    </header>
  );
}
