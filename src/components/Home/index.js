// == Import npm
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Helmet } from 'react-helmet';

// == Import icones
import lit from '../../assets/images/bed.svg';
import lunch from '../../assets/images/lunch.svg';
import camera from '../../assets/images/camera.svg';
import feuilleBananier from '../../assets/images/leafBanana.svg';
import Bananier from '../../assets/images/treeBanana.svg';

// == Import icones thirdContainer
import timeHotel from '../../assets/images/logoTime.svg';
import table from '../../assets/images/logoTable.svg';
import animaux from '../../assets/images/logoDog.svg';
import wifi from '../../assets/images/logoWifi.svg';

// == Import images slideshows
import photo1 from '../../assets/images/accueil/bloc1/accueil1.jpg'; 
import photo2 from '../../assets/images/accueil/bloc1/accueil2.jpg';
import photo3 from '../../assets/images/accueil/bloc1/accueil3.jpg';

import photo4 from '../../assets/images/accueil/bloc2/accueil4.jpg'; 
import photo5 from '../../assets/images/accueil/bloc2/accueil5.jpg';
import photo6 from '../../assets/images/accueil/bloc2/accueil6.jpg';


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
const Home = () => { 
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="home">
      <Helmet defaultTitle="Hôtel Mimado">
        <title>Hôtel Mimado - Accueil</title>
        <meta
          name="description"
          content="Venez découvrir et profiter de notre hôtel ainsi que de notre magnifique plage privée."
        />
      </Helmet>
      <section className="firstContainer">
        <div className="firstTitleGroup" style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>
          <span className="firstTitle">bienvenue à l'</span>
          <h1 className="firstTitle">hôtel mimado</h1>
        </div>
        <p className="secondText" style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>Venez découvrir notre région sous un autre angle.</p>
      </section>
      <section className="secondContainer">
        <div className="maskLeafBananier">
          <img className="leafBananier" src={feuilleBananier} alt="Image de fond représentant une feuille de bananier."/>
        </div>
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
        <div className="firstBloc">
          <div className="containerSlide">
            <Fade {...proprietes}>
              <div className="each-slide">
                <div>
                  <img className="slideImage" src={photo1} alt="Plage de l'hôtel"/>
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img className="slideImage" src={photo2} alt="Photo de l'hôtel"/>
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img className="slideImage" src={photo3} alt="Photo aérienne de l'hôtel"/>
                </div>
              </div>
            </Fade>
          </div>
          <div className="paragraphFirstBloc">
            <p className="firstTextBloc">Un cadre idéal pour se ressourcer</p>
            <p className="secondTextBloc">« Oublié un instant les tourments de nos vies citadines, c'est un véritable retour aux sources que nous vous proposons. »</p>
            <p className="lastTextBloc">L’hébergement avec ou sans restauration est possible. En demi pension ou pension complète, tout est possible chez Mimado.</p>
            <a href="/hebergement"><button className="buttonBloc">En savoir plus</button></a>
          </div>
        </div>
      </section>
      <section className="thirdContainer">
        <div className="blocBananier">
          <img className="Bananier" src={Bananier} alt="Image de fond représentant une bananier."/>
        </div>
        <div className="containerInfos">
          <h2 className="titleInfo">Informations complémentaires</h2>
          <div className="groupInfos">
            <div className="oneInfo">
              <img className="logoInfo" src={timeHotel} alt="Icone d'horloge représentant les horaires de départ et d'arrivée."/>
              <h3 className="oneTitleInfo">horaire</h3>
              <p className="oneTextInfo">Arrivée: 07:00 - 20:00</p>
              <p className="oneTextInfo">Départ: 12:00 - 16:00</p>
            </div>
            <span className="cercleInfo"></span>
            <div className="oneInfo">
              <img className="logoInfo" src={table} alt="Icone d'une table informant sur le prix du dejeuner."/>
              <h3 className="oneTitleInfo">dejeuner</h3>
              <p className="oneTextInfo">Petit déjeuner</p>
              <p className="oneTextInfo">pour 2500 à 3500 CFA.</p>
            </div>
            <span className="cercleInfoMiddle"></span>
            <div className="oneInfo">
              <img className="logoInfo" src={animaux} alt="Icone représentant l'acceptation des animaux de compagnies.'"/>
              <h3 className="oneTitleInfo">animaux</h3>
              <p className="oneTextInfo">Animaux de</p>
              <p className="oneTextInfo">compagnie acceptés</p>
            </div>
            <span className="cercleInfo"></span>
            <div className="oneInfo">
              <img className="logoInfo" src={wifi} alt="Icone représentant l'accés au wifi gratuitement."/>
              <h3 className="oneTitleInfo">wifi</h3>
              <p className="oneTextInfo">WIFI disponible</p>
              <p className="oneTextInfo">gratuitement</p>
            </div>
          </div>
        </div>
        <div className="secondBloc">
          <div className="containerSlide">
              <Fade {...proprietes}>
                <div className="each-slide">
                  <div>
                    <img className="slideImage" src={photo5} alt="Photo du restaurant en bord de plage."/>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img className="slideImage" src={photo4} alt="Plage de l'hôtel"/>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img className="slideImage" src={photo6} alt="Photo de la plage et du restaurant."/>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="paragraphSecondBloc">
              <p className="secondTextBloc">Un restaurant en bord de mer</p>
              <p className="secondTextBloc2">« Venez vous aérer l’esprit autour de bons petits plats ou profiter du bar les pieds dans le sable. »</p>
              <p className="lastTextBloc">Notre restaurant côté plage est ouvert tous les jours, que ce soit pour manger ou boire un verre !</p>
              <a href="/restauration"><button className="buttonBloc">En savoir plus</button></a>
            </div>
        </div>
      </section>
    </div>
  );
};

// == Export
export default Home;
