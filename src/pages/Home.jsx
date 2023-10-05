import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import partenaires from "../data/partenaires";
import Reponse from "../components/Reponse";
import couvert from "../assets/couvert.png";
import zarlor from "../assets/zarlor.jpg";
import pilon from "../assets/pilon.jpg";
import loc from "../assets/loc.png";
import hor from "../assets/hor.png";
import nuit from "../assets/nuit.png";

import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [categories, setCategories] = useState([]);
  const [faq, setFaq] = useState([]);

  const prepareData2 = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à
    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    setFaq([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_FAQ)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData2(data.data));
  }, []);

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à
    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    setCategories([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_CATEGORIES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  return (
    <main className="flex-col home">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <header className="padding-header ">
        <div>
          <img
            src={zarlor}
            alt={`logo de ${helmet.title}`}
            className="logo zarlor"
          />
          <img
            src={pilon}
            alt={`logo de ${helmet.title}`}
            className="logo pilon"
          />
        </div>
      </header>

      <section className="top">
        <h1>Make Me Scream</h1>
        <h2 className="bebas_h2">KIKI BALL 2023</h2>
        <div>
          <p>
            Pour fêter Halloween dignement les houses Zarlor et Pilon vous
            invitent à un KIKI BALL le mardi 31 octobre 2023 à partir de 19h30 à
            l'Outside, Saint-Gilles
          </p>
        </div>
        <div className="buttons_container">
          <a
            href="https://drive.google.com/file/d/1dxR2opYV6Ww-Ay_preHDrXyYiA4YZw6G/view"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="button_style">
              Télécharger les catégories
            </button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeeDYtEkTUxNbS0rsP4iB330BnRKtx6rQ2TGJavxv2OLMeOoA/viewform?usp=sf_link "
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="button_style red">
              S'inscrire au kiki ball
            </button>
          </a>
        </div>
      </section>

      <section className="categories">
        <h2>LES CATÉGORIES</h2>

        {categories.map((el) => (
          <div key={el.id} onDragStart={handleDragStart} className="category">
            <h3>
              {el.id}. {el.categorie}
            </h3>
            <h4>{el.theme}</h4>
            <div className="duok">
              <iframe src={el.iframe} frameBorder="0" title={el.categorie} />
              <article>
                {el.description.split(";").map((elo) => (
                  <p>{elo}</p>
                ))}
              </article>
            </div>
          </div>
        ))}
      </section>
      <section className="lieux">
        <h2>comment s'y rendre</h2>
        <div className="duo">
          <article>
            <h3>L'OUTSIDE </h3>
            <div className="details_container">
              <div>
                <img src={loc} alt="localisation icone" />
                <p>Port de plaisance, Saint Gilles</p>
              </div>
              <div>
                <img src={hor} alt="horloge icone" />
                <p>
                  Début du ball à 19h30
                  <br />
                  After jusqu'à 05h du matin
                </p>
              </div>
              <div>
                <img src={couvert} alt="fourchette et couteau icone" />
                <p>
                  Un menu spécial Halloween sera proposé sur réservation par
                  l'Outside
                </p>
              </div>
              <div>
                <img src={nuit} alt="lune avec symboles pour dormir" />
                <p>
                  Si vous comptez boire ou si vous venez en bus, <br /> nous
                  avons une équipe qui va camper sur place sur la plage des
                  Brisants
                </p>
              </div>
            </div>
          </article>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14486.45395105528!2d55.2238507!3d-21.0556446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x218293ce8bf9e8d7%3A0x451f7c67be4c4874!2sOutside!5e1!3m2!1sfr!2sfr!4v1695714365970!5m2!1sfr!2sfr"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="outside"
          />
        </div>
      </section>
      <section className="faq">
        <h2>Foire aux questions</h2>

        {faq.map((el) => (
          <Reponse el={el} />
        ))}
      </section>
      <section className="partenaires white">
        <h2>Découvrez nos partenaires</h2>
        <div>
          {partenaires.map((el) => (
            <a href={el.link} target="_blank" rel="noreferrer">
              <img src={el.src} alt={el.alt} />
            </a>
          ))}
        </div>
      </section>
      <footer>
        <p>
          Designé et développé par le{" "}
          <a
            href="https://grimoire-numerique.re"
            target="_blank"
            rel="noreferrer"
          >
            Grimoire Numérique
          </a>
        </p>
        <p>Tous droits réservés 2023</p>
        <Link to="/Mentions">Mentions légales</Link>
      </footer>
    </main>
  );
}
