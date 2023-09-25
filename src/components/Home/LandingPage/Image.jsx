import React from "react";
import background from "../../../assets/background.png";

function Image({ title }) {
  /* Pour utiliser ce composant, suivre les étapes suivantes :

    1/ Remplacer background.png par l'image souhaitée dans Assets
    2/ Remplir landingData
    3/ Importer Image dans le composant souhaitée

    Depuis n'importe quelle page, on peut importer Image de la façon suivante :

    import Image from "../components/Home/LandingPage/Image"
    <Image title={helmet.title} />

  */

  const landingData = {
    h2: "Belle phrase d'accroche",
    alt: "decription de l'image",
  };
  return (
    <section className="landing_page relative">
      <h1>{title}</h1>
      <h2>{landingData.h2}</h2>
      <img src={background} alt={landingData.alt} className="background_img" />
      <div className="veil" />
    </section>
  );
}

export default Image;
