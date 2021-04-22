// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import mobile from '../../assets/images/logoPhone.svg';
import earth from '../../assets/images/logoGps.svg';
import arrow from '../../assets/images/logoArrow.svg';

import './footer.scss';

// == Composant
const Footer = () => { 
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }
  const redirectOnClickToTop = () => {
    window.scrollTo({
      top:0,
    });
  }
  return (
    <div className="footer">
      <section className="firstContainerFooter">
        <div className="goToTop" onClick={scrollToTop}>
          <img src={arrow} alt="Logo retour haut de la page."/>
        </div>
        <div className="containerFooterContact">
          <p className="titleFooter">Nous contacter</p>
          <div className="contactNumberFooter">
            <img className="contactLogoFooter" src={mobile} alt="Logo représentant un téléphone portable."/>  
            <div className="groupFooterContact">
              <a href="tel:0023799877593" className="oneFooterContact">(00237) 99 87 75 93</a>
              <a href="tel:0023799997917" className="oneFooterContact">(00237) 99 99 79 17</a>
            </div>
          </div>
          <div className="contactNumberFooter">
            <img className="contactLogoFooter" src={earth} alt="logo représentant une localisation GPS."/> 
            <div className="groupFooterContact"> 
              <a href="https://www.google.fr/maps/place/2%C2%B050'14.5%22N+9%C2%B053'07.3%22E/@2.8356543,9.8849632,883m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d2.8373611!4d9.8853611" className="oneFooterContact" target="_blank" rel="noopener">Hôtel Mimado<br/>Bongahélé GrandBatanga II Kribi</a>
            </div>
          </div>
        </div>
        <nav className="containerFooterContact">
          <p className="titleFooter">Navigation</p>
          <ul className="groupNavFooter">
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/">Accueil</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/hebergement">Hébergement</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/restauration">Restauration</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/prestation">Prestation</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/activites">Activités</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </section>
      <div className="bottomFooter">
        <p className="textBottomFooter">
          <NavLink exact to="/mentionslegales" activeClassName="textBottomFooter--active" onClick={redirectOnClickToTop}>Mentions légales</NavLink>
        </p>
        <p>© 2021 Hôtel Mimado</p>
      </div>
    </div>
  );
};

// == Export
export default Footer;
