import React from "react";
import Card from "./Card";
import menu from "../data/menu";
import Espresso from './assets/Espresso.jpg';
import pizza from './assets/pizza.jpg'

export default function MenuGrid(){
  return (
    <section id="menu" className="menu container">
      <h2 className="section-title appear-up">Our Menu</h2>
      <div className="grid">
        {menu.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
