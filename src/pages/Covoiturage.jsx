import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import u from "../assets/utilisateur.png";
import s from "../assets/siege.png";
import hor from "../assets/hor.png";
import zarlor from "../assets/zarlor.jpg";
import pilon from "../assets/pilon.jpg";

function Covoiturage({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [dispo, setDispo] = useState([]);
  const [demande, setDemande] = useState([]);
  const [choix, setChoix] = useState(false);

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
    setDispo([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_DISPO)
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
    setDemande([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_DEMANDE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);
  return (
    <div className="home">
      <Helmet>
        <title> {helmet.title} | Tarifs </title>
        <link rel="canonical" href={`${helmet.href}/Covoiturage`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="home">
        <header className="padding-header ">
          <Link to="/">
            <div>
              <img src={zarlor} alt="logo de zarlor" className="logo zarlor" />
              <img src={pilon} alt="logo de pilon" className="logo pilon" />
            </div>
          </Link>
        </header>
        <h1 className="covoit_h1">Covoiturage du ball</h1>
        <div className="top_covoit">
          <button
            type="button"
            className={choix ? "button_style" : "button_style red"}
            onClick={() => setChoix(false)}
          >
            Je cherche un covoiturage
          </button>
          <button
            type="button"
            className={!choix ? "button_style" : "button_style red"}
            onClick={() => setChoix(true)}
          >
            J'ai de la place dans ma voiture
          </button>
        </div>
        {!choix ? (
          <div className="covoits">
            <div className="covoit_container">
              {dispo.map((el) => (
                <div className="covoit">
                  <h3>
                    <span>
                      {" "}
                      {el.nom} de {el.depart} fait le trajet en voiture
                    </span>
                    <span>
                      {" "}
                      <img src={s} alt="icone avatar" />
                      {el.places}
                    </span>
                  </h3>
                  <p>
                    <img src={hor} alt="icone horloge" />
                    Départ prévu à {el.heure}
                  </p>
                  <p>{el.commentaire}</p>
                  <a href={el.contact}>
                    <button type="button" className="button_style">
                      contacter cette personne
                    </button>
                  </a>
                </div>
              ))}
            </div>
            <div>
              <p>
                Je n'ai pas de transport et je cherche quelqu'un avec qui me
                rendre au ball
              </p>
              <a href="https://docs.google.com/spreadsheets/d/1WVklw9CGHF4LLVICK9aEDYCu3R4j9kWBBi4wMcplTIo/edit?usp=sharing">
                <button type="button" className="button_style">
                  Ajouter une demande de covoiturage
                </button>
              </a>
            </div>
          </div>
        ) : (
          <div className="covoits">
            <div className="covoit_container">
              {demande.map((el) => (
                <div className="covoit">
                  <h3>
                    <span>
                      {" "}
                      {el.nom} de {el.depart} cherche un covoit
                    </span>
                    <span>
                      {" "}
                      <img src={u} alt="avatar" />
                      {el.places}
                    </span>
                  </h3>
                  <p>{el.commentaire}</p>
                  <a href={el.contact}>
                    <button type="button" className="button_style">
                      contacter cette personne
                    </button>
                  </a>
                </div>
              ))}
            </div>
            <div>
              <p>
                J'ai de la place dans ma voiture et je souhaite proposer du
                covoiturage
              </p>
              <a href="https://docs.google.com/spreadsheets/d/1Eqv34ldqH-71EDEieAUSc3CeneOLzFiYvtI5D2b_K1o/edit?usp=sharing">
                <button type="button" className="button_style">
                  Ajouter mon trajet
                </button>
              </a>
            </div>
          </div>
        )}
      </main>
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
    </div>
  );
}

export default Covoiturage;
