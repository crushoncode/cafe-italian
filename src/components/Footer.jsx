import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Cafe Italian — Neurofactor task</p>
      </div>
    </footer>
  );
}
