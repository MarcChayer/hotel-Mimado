// == Import npm
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

// == Import style
import './contact.scss';
import 'react-toastify/dist/ReactToastify.css';

// == Import image
import map from '../../assets/images/camerounMap.svg';


// == Composant
const Contact = () => { 
  toast.configure();

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
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
    // verification des inputs
    if (name && firstName && message && isEmail()) {
      emailjs.sendForm("service_aht1vfo", "template_jao6lyh", event.target, "user_9coErnt98IbJYjURIIR9L")
        .then((res) => {
          toast.success('Nous accusons la bonne réception de votre message, vous aurez un retour rapidement.', { className:"toast__success" });
          setName("");
          setFirstName("");
          setCompany("");
          setEmail("");
          setMessage("");
        });
    } 
    if (!name || !firstName || !message) {
      toast.error('Tous les champs du formulaire sont obligatoires, mis à part celui de l\'entreprise.', { className:"toast__error" });
    } else if (!isEmail()) {
      toast.error('Votre adresse mail ne semble pas valide, rentrer une adresse valide.', { className:"toast__error" });
      console.log('email non conforme');
    }
  }

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
          <p className="formTextContainer">Si vous souhaitez faire une réservation ou avoir plus d’information, contactez-nous :</p>
          <p className="formTextContainer2">(Les mentions se terminant par * sont obligatoires.)</p>
          <form method="post" className="form" onSubmit={handleOnSubmit}>
              <label className="formLabel">
                Nom*
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
                Prénom*
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
                Mail*
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
              Message*
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
      <ToastContainer 
        position="top-right"
        autoClose={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

// == Export
export default Contact;
