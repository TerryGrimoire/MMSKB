import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AliceCarousel from "react-alice-carousel";
import papa from "papaparse";
import Reponse from "../components/Reponse";
import griffe from "../assets/griffe.png";
import zarlor from "../assets/zarlor.jpg";
import pilon from "../assets/pilon.jpg";
import bal from "../assets/bal.png";
import loc from "../assets/loc.png";
import hor from "../assets/hor.png";

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

  const items = categories.map((el) => (
    <div key={el.id} onDragStart={handleDragStart} className="category">
      <h3>
        {el.id}. {el.categorie}
      </h3>
      <h4>{el.theme}</h4>
      <iframe src={el.iframe} frameBorder="0" title={el.categorie} />
      {el.description.split(";").map((elo) => (
        <p>{elo}</p>
      ))}
    </div>
  ));

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
            convient à un Kiki Ball Le samedi 28 octobre 2023 à partir de 20h à
            l'Outside, Saint-Gilles
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1nweJiBKvI4g9Iq6UF6sonPXEciNGMpcS/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="button_style">
            Télécharger les catégories
          </button>
        </a>
        <img src={griffe} alt="griffe" className="griffe" />
      </section>

      <section className="categories">
        <h2>LES CATÉGORIES</h2>
        <div className="desktop">
          <AliceCarousel
            mouseTracking
            items={items}
            infinite
            disableButtonsControls
            autoPlay
            autoPlayInterval={7000}
          />
        </div>
        {categories.map((el) => (
          <div
            key={el.id}
            onDragStart={handleDragStart}
            className="category mobile"
          >
            <h3>
              {el.id}. {el.categorie}
            </h3>
            <h4>{el.theme}</h4>
            <iframe src={el.iframe} frameBorder="0" title={el.categorie} />
            {el.description.split(";").map((elo) => (
              <p>{elo}</p>
            ))}
          </div>
        ))}
      </section>
      <section className="lieux">
        <div className="duo">
          <h2>comment s'y rendre</h2>
          <article>
            <h3>L'OUTSIDE </h3>
            <div className="details_container">
              <div>
                <img src={loc} alt="localisation icone" />
                <p>Port de plaisance, Saint Gilles</p>
              </div>
              <div>
                <img src={hor} alt="horloge icone" />
                <p>Début du ball à 20h</p>
              </div>
              <div>
                <img src={bal} alt="ballon icone" />
                <p>After jusqu'à 05h du matin</p>
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
