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
  const scrollToTopDirect = () => {
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
              <a href="tel:0023799877593" className="oneFooterContact">(00237) 651 160 446</a>
              <a href="tel:0023799877593" className="oneFooterContact">(00237) 699 877 593</a>
            </div>
          </div>
          <div className="contactNumberFooter">
            <img className="contactLogoFooter" src={earth} alt="logo représentant une localisation GPS."/> 
            <div className="groupFooterContact"> 
              <a href="https://www.google.com/maps/place/Mimado+Hotel/@2.8370157,9.8851988,620m/data=!3m1!1e3!4m8!3m7!1s0x0:0xb11638e8e9405bbf!5m2!4m1!1i2!8m2!3d2.8373945!4d9.8851955" className="oneFooterContact" target="_blank" rel="noopener">Hôtel Mimado<br/>Bongahélé GrandBatanga II Kribi</a>
            </div>
          </div>
        </div>
        <nav className="containerFooterContact">
          <p className="titleFooter">Navigation</p>
          <ul className="groupNavFooter">
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/" onClick={scrollToTopDirect}>Accueil</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/hebergement" onClick={scrollToTopDirect}>Hébergement</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/restauration" onClick={scrollToTopDirect}>Restauration</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/prestations" onClick={scrollToTopDirect}>Prestations</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/activites" onClick={scrollToTopDirect}>Activités</NavLink></li>
            <li className="oneFooterContact"><NavLink activeClassName="oneFooterContact--active" exact to="/contact" onClick={scrollToTopDirect}>Contact</NavLink></li>
          </ul>
        </nav>
      </section>
      <div className="bottomFooter">
        <p className="textBottomFooter">
          <NavLink exact to="/mentionslegales" activeClassName="textBottomFooter--active" onClick={scrollToTopDirect}>Mentions légales</NavLink>
        </p>
        <p>© 2021 Hôtel Mimado</p>
      </div>
    </div>
  );
};

// == Export
export default Footer;
