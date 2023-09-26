import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AliceCarousel from "react-alice-carousel";
import papa from "papaparse";
import tache from "../assets/tache.png";
import griffe from "../assets/griffe.png";
import zarlor from "../assets/zarlor.jpg";
import pilon from "../assets/pilon.jpg";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [categories, setCategories] = useState([]);

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
        <img src={tache} alt="tache de sang" className="tache" />
        <h1>Make Me Scream</h1>
        <h2 className="bebas_h2">KIKI BALL 2023</h2>
        <div>
          <p>Le samedi 28 octobre 2023</p>
          <p>à partir de 20h à l'Outside, Saint-Gilles </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1nweJiBKvI4g9Iq6UF6sonPXEciNGMpcS/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="button_style">
            Voir les catégories
          </button>
        </a>
        <img src={griffe} alt="griffe" className="griffe" />
      </section>

      <section className="categories">
        <h2>LES CATÉGORIES DU MAKE ME SCREAM KIKI BALL</h2>
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          disableButtonsControls
        />
      </section>
      <section className="lieux">
        <article>
          <h3>L'OUTSIDE </h3>
          <div>
            <p>Port de plaisance, Saint Gilles</p>
            <p>Début du ball à 20h</p>
            <p>After jusqu'à 05h du matin</p>
          </div>
        </article>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14486.45395105528!2d55.2238507!3d-21.0556446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x218293ce8bf9e8d7%3A0x451f7c67be4c4874!2sOutside!5e1!3m2!1sfr!2sfr!4v1695714365970!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="outside"
        />
      </section>
      <section className="second_part">
        <div className="duo">
          <article>
            <h3>QU'EST-CE QU'UN BALL ?</h3>
            <p>
              Le Ball est un phénomène de sous-culture LGBT dans lesquels des
              personnes queers souvent regroupés en houses entrent en
              compétition pour un trophée ou des prix dans différentes
              catégories. Les compétitions peuvent inclure de la danse
              (voguing), des défilés ou encore des catégories imitant d'autres
              genres et classes sociales.
            </p>
            <p>
              L’histoire de la ballroom scene s’enracine dans celle des
              drag-queens et des femmes trans noires et latinas. Souffrant du
              racisme et ulcérées de ne jamais décrocher de prix dans les
              concours de beauté drag, elles décident de faire bande à part et
              de fonder leurs propres ballrooms dans les clubs d'Harlem à
              New-York.
            </p>
          </article>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2q2NMv5m7xE?si=d_vTSc1uFh4-Jo2l?autoplay=1&mute=1&loop=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
