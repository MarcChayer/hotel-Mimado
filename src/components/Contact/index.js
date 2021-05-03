// == Import npm
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

// == Import style
import './contact.scss';
// import 'react-toastify/dist/ReactToastify.css';

// == Import image
import map from '../../assets/images/camerounMap.svg';


// == Composant
const Contact = () => { 
  // toast.configure();

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
      requiredAste.style.padding = '0em';
      requiredAste.style.textAlign = 'left';        
      requiredAste.style.marginBottom = '1.5em';
      // envoie des informations via mailjs
      emailjs.sendForm("service_aht1vfo", "template_jao6lyh", event.target, "user_9coErnt98IbJYjURIIR9L")
        .then((res) => {
          succesSubmit.style.display = 'block';
          // toast.success('Nous accusons bonne réception de votre message, vous aurez un retour rapidement.', { className:"toast__success" });
          setName("");
          setCompany("");
          setEmail("");
          setMessage("");
        });
    };
    if (!name || !message) {
      // toast.error('Tous les champs du formulaire marqués d\'un astérisque * sont obligatoires.', { className:"toast__error" });
      document.getElementById('name').classList.add('required');
      document.getElementById('message').classList.add('required');
      requiredAste.style.color = 'white';
      requiredAste.style.backgroundColor = '#e74c3d';
      requiredAste.style.padding = '.5em 0em';
      requiredAste.style.textAlign = 'center';        
      requiredAste.style.marginBottom = '.5em';
    };
    if (!isEmail()) {
      // toast.error('Votre adresse mail ne semble pas valide, rentrer une adresse valide.', { className:"toast__error" });
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
      <Helmet defaultTitle="Hôtel Mimado">
        <title>Hôtel Mimado - Contact</title>
        <meta
          name="description"
          content="Pour réserver une chambre ou un renseignement, n'hésitez pas à nous contacter via notre site internet ou pas téléphone."
        />
      </Helmet>
      <h1 className="titleContact">contact</h1>
      <section className="containerContact">
        <div className="formContainer">
          <p className="formTextContainer">Si vous souhaitez faire une réservation ou avoir plus d’informations, contactez-nous :</p>
          <p className="formTextContainer2" id="requiredAste">(Les champs marqués d'un astérisque (*) sont obligatoires.)</p>
          <p id="mailError">Votre adresse mail ne semble pas valide, rentrer une adresse valide.</p>
          <p id="succesSubmit">Nous accusons bonne réception de votre message, vous aurez un retour rapidement.</p>
          <form method="post" className="form" onSubmit={handleOnSubmit}>
              <label className="formLabel">
                Prénom et nom*
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                value={name}
                placeholder="Votre prénom et nom"
                className="formInput"
                id="name"
                maxlength="45"
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
                maxlength="45"
                autoComplete="off"
              />
              <label className="formLabel">
                Mail*
              </label>
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
          <img className="mapCameroun" src={map} alt="illustration représentant le cameroun."/>
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
