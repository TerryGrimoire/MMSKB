import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Tarifs">Tarifs</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
