// == Import npm
import React from 'react';

// == Import
import map from '../../assets/images/camerounMap.svg';

import './contact.scss';

// == Composant
const Contact = () => (
  <div className="contact">
    <h1 className="titleContact">contact</h1>
    <div className="formContainer">
      <p className="formTextContainer">Si vous souhaitez faire une réservation ou avoir plus d’information, contactez-nous :</p>
      <form action="" className="form">
        <label className="formLabel">
          Nom
        </label>
        <input type="text" name="Nom" placeholder="Nom" className="formInput" autoComplete="off"/>
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
        </label>
          <textarea type="text" name="" placeholder="Message" className="formInput" autoComplete="off" />
          <div>
            <button>Envoyer</button>
          </div>
      </form>
    </div>
    <div className="groupMapCameroun">
      <img className="mapCameroun" src={map} alt="illustration représentant le cameroun."/>
    </div>
  </div>
);

// == Export
export default Contact;
