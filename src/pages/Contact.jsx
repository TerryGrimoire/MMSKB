import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Form from "../components/Contact/Form";

function Contact({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [rdv, setRdv] = useState(true);
  return (
    <div className="flex flex-col align-center">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <h2>Nous joindre</h2>
      <section>
        <div className="flex justify-center margin1r0 ">
          <button
            type="button"
            className="button_style margin0r1r"
            onClick={() => setRdv(true)}
          >
            Prendre un rdv
          </button>
          <button
            type="button"
            className="button_style margin0r1r"
            onClick={() => setRdv(false)}
          >
            Envoyer un email
          </button>
        </div>
        {rdv ? (
          <iframe
            src="https://calendly.com/terry-grimoire/30min?month=2022-08"
            frameBorder="0"
            title="calendly terry grimoire"
          />
        ) : (
          <Form />
        )}
      </section>
    </div>
  );
}

export default Contact;
