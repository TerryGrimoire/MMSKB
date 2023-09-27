import React, { useState } from "react";
import chevron from "../assets/chevron.png";

function Reponse({ el }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={el.id}>
      <article>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {el.question}
          <img
            src={chevron}
            alt="icone fleche vers le bas"
            className="chevron"
          />{" "}
        </button>
        {isOpen && el.reponse.split(";").map((elo) => <p>{elo}</p>)}
      </article>
    </div>
  );
}

export default Reponse;
