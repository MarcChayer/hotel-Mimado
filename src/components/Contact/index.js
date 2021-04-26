// == Import npm
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// == Import
import map from '../../assets/images/camerounMap.svg';

import './contact.scss';

// == Composant
const Contact = () => { 
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log('name', name);


  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // verification des inputs
    if (name && firstName && company && message && isEmail()) {
      emailjs.sendForm("service_gz5igu6", "template_jao6lyh", event.target, "user_9coErnt98IbJYjURIIR9L")
        .then((res) => {
          // toast.success('Votre message à bien été envoyé, vous aurez un retour rapidement.', { className:"toast__success" });
          console.log('succes', res);
          setName("");
          setFirstName("");
          setCompany("");
          setEmail("");
          setMessage("");
        });
    } 
    if (!name && !firstName && !message) {
      // toast.error('Vous devez remplir les trois champs du formulaire.', { className:"toast__error" });
      console.log('remplir 3 champs');
    } else if (!isEmail()) {
      // toast.error('Votre adresse mail ne semble pas valide, essayez à nouveau.', { className:"toast__error" });
      console.log('email non conforme');
    }
  }

  return (
    <div className="contact">
      <h1 className="titleContact">contact</h1>
      <section className="containerContact">
        <div className="formContainer">
          <p className="formTextContainer">Si vous souhaitez faire une réservation ou avoir plus d’information, contactez-nous :</p>
          <form method="post" className="form" onSubmit={handleOnSubmit}>
              <label className="formLabel">
                Nom
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                value={name}
                placeholder="Votre nom"
                className="formInput"
                autoComplete="off"
              />
              <label className="formLabel">
                Prénom
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                value={firstName}
                placeholder="Votre prénom"
                className="formInput"
                autoComplete="off"
              />
              <label className="formLabel">
                Entreprise
              </label>
              <input
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                name="company"
                value={company}
                placeholder="Votre entreprise"
                className="formInput"
                autoComplete="off"
              />
              <label className="formLabel">
                Mail
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
                placeholder="Votre mail"
                className="formInput"
                size="60" 
              />
            <label className="formLabel">
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="message"
              value={message}
              placeholder="Saisissez votre message ici"
              className="formInput"
              autoComplete="off"
            />
            <button
              type="submit"
              className="formSubmit"
            >
              Envoyer
            </button>
          </form>
        </div>
        <div className="groupMapCameroun">
          <div className="mapCamerounGradient"></div>
          <img className="mapCameroun" src={map} alt="illustration représentant le cameroun."/>
          <div className="mapCamerounGradientBottom"></div>
        </div>
      </section>
    </div>
  );
};

// == Export
export default Contact;
