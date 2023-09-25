import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";

function Nav({ setOpenBurger }) {
  return (
    <nav className="flex-col openBurger justify-between">
      <button
        type="button"
        onClick={() => setOpenBurger(false)}
        className="croix"
      >
        <img src={croix} alt="croix pour fermer la navigation sur la page" />
      </button>
      <Link to="/">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Accueil
        </button>
      </Link>
      <Link to="/Services">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Services
        </button>
      </Link>
      <Link to="/Tarifs">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Tarifs
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Contact
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
