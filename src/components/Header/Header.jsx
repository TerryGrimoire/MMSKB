import React from "react";
import zarlor from "../../assets/zarlor.jpg";
import pilon from "../../assets/pilon.jpg";

function Burger({ helmet }) {
  return (
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
  );
}

export default Burger;
