import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import tache from "../assets/tache.png";
import griffe from "../assets/griffe.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section className="top">
        <img src={tache} alt="tache de sang" className="tache" />
        <h1>Make Me Scream</h1>
        <h2 className="bebas_h2">KIKI BALL 2023</h2>
      </section>
      <section className="second_part">
        <div className="duo">
          <img src={griffe} alt="griffure" />
          <p>
            Une collaboration entre les houses Zalor et Pilon pour vous offrir
            un kiki ball à la hauteur de la ballroom scène grandissante de la
            Réunion.
          </p>
        </div>
      </section>
    </main>
  );
}
