// == Import npm
import React from 'react';

// == Import

import './home.scss';

// == Composant
const Home = () => (
  <div className="home">
    <section className="firstContainer">
      <h1 className="firstTitle">bienvenue à l'hôtel mimado</h1>
      <p className="secondText">Venez découvrir notre région sous un autre angle.</p>
    </section>
    <section className="secondContainer">
      <div className="cardsHome">
        <div className="cardHome">
          <div className="cardLogo"><img src="" alt=""/></div>
          <a href="#"></a>
          <p>Hôtel et Commodités</p>
        </div>
        <div className="cardHome">
          <div className="cardLogo"><img src="" alt=""/></div>
          <a href="#"></a>
          <p>Restaurants et bars</p>
        </div>
        <div className="cardHome">
          <div className="cardLogo"><img src="" alt=""/></div>
          <a href="#"></a>
          <p>Les activités autour du site</p>
        </div>
      </div>
    </section>
  </div>
);

// == Export
export default Home;
