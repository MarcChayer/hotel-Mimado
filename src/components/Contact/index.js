// == Import npm
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

// == Import style
import './contact.scss';

// == Import image
import map from '../../assets/images/camerounMap.svg';


// == Composant
const Contact = () => { 

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    const requiredAste = document.getElementById('requiredAste');
    const requiredMail = document.getElementById('mailError');
    const succesSubmit = document.getElementById('succesSubmit');
    // verification des inputs
    if (name  && message && isEmail()) {
      // style des infos concernant les mentions obligatoire
      requiredAste.style.backgroundColor = 'transparent';
      requiredAste.style.border = 'none';
      requiredAste.style.padding = '0em';
      requiredAste.style.textAlign = 'left';        
      requiredAste.style.marginBottom = '1.5em';
      // envoie des informations via mailjs
      emailjs.sendForm("service_aht1vfo", "template_jao6lyh", event.target, "user_9coErnt98IbJYjURIIR9L")
        .then((res) => {
          succesSubmit.style.display = 'block';
          setName("");
          setCompany("");
          setEmail("");
          setMessage("");
        });
    };
    if (!name || !message) {
      document.getElementById('name').classList.add('required');
      document.getElementById('message').classList.add('required');
      requiredAste.style.color = 'white';
      requiredAste.style.border = '3px solid #e74c3d';
      requiredAste.style.backgroundColor = '#e74c3d';
      requiredAste.style.padding = '.5em .5em';
      requiredAste.style.textAlign = 'center';        
      requiredAste.style.marginBottom = '.8em';
    };
    if (!isEmail()) {
      document.getElementById('email').classList.add('required');
      requiredMail.style.display = 'block';
      requiredMail.style.transition = '.8s ease-in-out';

    };
    if (name) {
      document.getElementById('name').classList.remove('required');
    };
    if (message) {
      document.getElementById('message').classList.remove('required');
    }; 
    if (isEmail()) {
      document.getElementById('email').classList.remove('required');
      requiredMail.style.display = 'none';
    };
  };
  return (
    <div className="contact">
      <Helmet defaultTitle="H??tel Mimado">
        <title>H??tel Mimado - Contact</title>
        <meta
          name="description"
          content="Pour r??server une chambre ou un renseignement, n'h??sitez pas ?? nous contacter via notre site internet ou pas t??l??phone."
        />
      </Helmet>
      <h1 className="titleContact">contact</h1>
      <section className="containerContact">
        <div className="formContainer">
          <p className="formTextContainer">Si vous souhaitez faire une r??servation ou avoir plus d???informations, contactez-nous :</p>
          <p className="formTextContainer2" id="requiredAste">(Les champs marqu??s d'un ast??risque (*) sont obligatoires.)</p>
          <p id="succesSubmit">Nous accusons bonne r??ception de votre message, vous aurez un retour rapidement.</p>
          <form method="post" className="form" onSubmit={handleOnSubmit}>
            <label className="formLabel">
              Pr??nom et nom*
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              value={name}
              placeholder="Votre pr??nom et nom"
              className="formInput"
              id="name"
              maxlength="45"
              autoComplete="off"
              pattern="[^0-9]+"
              title="Seuls les caract??res alphab??tiques sont accept??s."
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
              maxlength="45"
              autoComplete="off"
            />
            <label className="formLabel">
              Mail*
            </label>
            <p id="mailError">Veuillez entrer une adresse e-mail valide.</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
              placeholder="Votre mail"
              className="formInput"
              id="email"
              maxlength="254"
            />
            <label className="formLabel">
              Message*
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="message"
              value={message}
              placeholder="Saisissez votre message ici"
              className="formInput"
              id="message"
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
          <img className="mapCameroun" src={map} alt="illustration repr??sentant le cameroun."/>
          <div className="mapCamerounGradientBottom"></div>
        </div>
      </section>
      {/* <ToastContainer 
        position="top-right"
        autoClose={6500}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
};

// == Export
export default Contact;
