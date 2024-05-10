import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <NavLink className="nav-link">
      <div className="superior">
      <div className="componente1">
        <img src="../assets/8bed0ee79117e6d26de911a4ac519346.jfif" alt="" />
      </div>
      <div className="componente2">
        <p>
          <h5>Terapia 2</h5>
        </p>
        <p>
          <h5>Ejercicios Pelvicos</h5>
        </p>
      </div>
      <div className="componente3">
        <button>
          <h1>3</h1>
        </button>
      </div>
      </div>
    </NavLink>
  );
};

export default Card;
