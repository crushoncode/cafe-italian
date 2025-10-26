import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuGrid from "./components/MenuGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <MenuGrid />
      </main>
      <Footer />
    </div>
  );
}
