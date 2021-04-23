// == Import npm
import React from 'react';

// == Import
import map from '../../assets/images/camerounMap.svg';

import './contact.scss';

// == Composant
const Contact = () => (
  <div className="contact">
    <h1 className="titleContact">contact</h1>
    <section className="containerContact">
      <div className="formContainer">
        <p className="formTextContainer">Si vous souhaitez faire une réservation ou avoir plus d’information, contactez-nous :</p>
        <form action="" className="form">
            <label className="formLabel">
              Nom
            </label>
            <input type="text" name="Nom" placeholder="Nom" className="formInput" autoComplete="off"/>
            <label className="formLabel">
              Prénom
            </label>
            <input type="text" name="Prénom" placeholder="Prénom" className="formInput" autoComplete="off"/>
            <label className="formLabel">
              Entreprise
            </label>
            <input type="text" name="Entreprise" placeholder="Entreprise" className="formInput" autoComplete="off"/>
            <label className="formLabel">
              Mail
            </label>
            <input type="email" name="email" placeholder="Mail" className="formInput" autoComplete="off"/>
          <label className="formLabel">
            Message
          </label   >
          <textarea type="text" name="" placeholder="Message" className="formInput" autoComplete="off" />
          <div>
            <button className="formSubmit">Envoyez</button>
          </div>
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

// == Export
export default Contact;
