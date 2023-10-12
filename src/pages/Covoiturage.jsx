import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

function Covoiturage({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [dispo, setDispo] = useState([]);
  const [demande, setDemande] = useState([]);

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
    <div>
      <Helmet>
        <title> {helmet.title} | Tarifs </title>
        <link rel="canonical" href={`${helmet.href}/Covoiturage`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <h1>Covoiturage du ball</h1>

        <div>
          <h2>Places disponibles</h2>
          <div>
            {dispo.map((el) => (
              <div>
                <h3>
                  <strong>{el.places}</strong> disponibles au départ de{" "}
                  {el.depart}
                </h3>
                <p>Voyagez avec {el.nom}</p>
                <p>Départ prévu à {el.heure}</p>
                <p>{el.commentaire}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button type="button" className="button_style red">
            Je cherche une place
          </button>
          <button type="button" className="button_style red">
            J'ai de la place
          </button>
        </div>
      </main>
    </div>
  );
}

export default Covoiturage;
