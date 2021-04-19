// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// == Import icones
import lit from '../../assets/images/bed.svg';
import lunch from '../../assets/images/lunch.svg';
import camera from '../../assets/images/camera.svg';
import feuilleBananier from '../../assets/images/leafBanana.svg';
// == Import images slideshows
import photo1 from '../../assets/images/accueil/bloc1/accueil1.jpg'; 
import photo2 from '../../assets/images/accueil/bloc1/accueil5.jpg';
import photo3 from '../../assets/images/accueil/bloc1/IQBD3892.jpg';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  canSwipe: true,
  scale: 1,
}

import './home.scss';

// == Composant
const Home = () => (
  <div className="home">
    <section className="firstContainer">
      <h1 className="firstTitle">bienvenue à l'hôtel mimado</h1>
      <p className="secondText">Venez découvrir notre région sous un autre angle.</p>
    </section>
    <section className="secondContainer">
      <img className="feuilleBananier" src={feuilleBananier} alt="image de fond"/>
      <div className="cardsHome">
        <NavLink exact to="/hebergement" className="cardHome">
          <div className="cardLogo"><img src={lit} alt="icone hôtellerie"/></div>
          <p className="textCard">Hôtel et Commodités</p>
        </NavLink>
        <NavLink exact to="/restauration" className="cardHome">
          <div className="cardLogo"><img src={lunch} alt="icone restauration"/></div>
          <p className="textCard">Restaurants et bars</p>
        </NavLink>
        <NavLink exact to="/activites" className="cardHome">
          <div className="cardLogo"><img src={camera} alt="icone loisir"/></div>
          <p className="textCard">Les activités autour du site</p>
        </NavLink>
      </div>
      <div className='firstBloc'>
        <div className='containerSlide'>
          <Fade {...proprietes}>
            <div className='each-slide'>
              <div>
                <img className='slideImage' src={photo1} alt="Plage de l'hôtel"/>
              </div>
            </div>
            <div className='each-slide'>
              <div>
                <img className='slideImage' src={photo2} alt="Photo de l'hôtel"/>
              </div>
            </div>
            <div className='each-slide'>
              <div>
                <img className='slideImage' src={photo3} alt="Photo aérienne de l'hôtel"/>
              </div>
            </div>
          </Fade>
        </div>
        <div className='paragraphFirstBloc'>
          <p className='firstTextBloc1'>Un cadre idéal pour se ressourcer</p>
          <p className='secondTextBloc1'>« Oublié un instant les tourments de nos vies citadines, c'est un véritable retour aux sources que nous vous proposons. »</p>
          <p className='lastTextBloc1'>L’hébergement avec ou sans restauration est possible. En demi pension ou pension complète, tout est possible chez Mimado.</p>
          <a href="/hebergement"><button className='buttonBloc'>En savoir plus</button></a>
        </div>
      </div>
    </section>
  </div>
);

// == Export
export default Home;
