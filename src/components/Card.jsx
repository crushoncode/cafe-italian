import React from "react";

export default function Card({ item }) {
  return (
    <article className="card hover-elevate">
      <div className="card-media">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="muted">{item.description}</p>
        <div className="card-foot">
          <span className="price">₹{item.price}</span>
          <button className="btn small">Add</button>
        </div>
      </div>
    </article>
  );
}
