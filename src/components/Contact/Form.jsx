import React from "react";

function Form() {
  return (
    <form action="form">
      <form action="form" className="flex flex-col contact_form">
        <label htmlFor="nameInput">
          Nom et prénom
          <input
            type="text"
            placeholder="Saisir votre nom et prénom"
            name="nameInput"
          />
        </label>
        <label htmlFor="emailInput">
          Adresse email
          <input
            type="email"
            placeholder="Saisir votre adresse email"
            name="emailInput"
          />
        </label>
        <label htmlFor="phoneInput">
          Numéro de téléphone
          <input
            type="tel"
            placeholder="Saisir votre numéro de téléphone"
            name="phoneInput"
          />
        </label>
        <label htmlFor="messageInput">
          Votre message
          <textarea
            type="text"
            name="sujetlInput"
            placeholder="Saisir votre message"
          />
        </label>
        <button type="submit" value="send" className="button_style blue">
          Envoyer
        </button>
      </form>
    </form>
  );
}

export default Form;
