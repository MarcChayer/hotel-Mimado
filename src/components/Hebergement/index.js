// == Import npm
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './hebergement.scss';

// == Import images slideshows
import photo1 from '../../assets/images/hebergement/heber2.jpg';
import photo2 from '../../assets/images/hebergement/heber1.jpg'; 
import photo3 from '../../assets/images/hebergement/heber3.jpg';

// == Import images icone
import feuilleBananier from '../../assets/images/leafBanana.svg';
import Bananier from '../../assets/images/treeBanana.svg';
import icone1 from '../../assets/images/logoClim.svg'; 
import icone2 from '../../assets/images/logoVentilateur.svg';
import icone3 from '../../assets/images/logoWifi2.svg';
import icone4 from '../../assets/images/logoTv.svg';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  canSwipe: true,
  scale: 1,
}

// == Composant
const Hebergement = () => (
  <div className="hebergement">
    <div className="maskLeafBananier">
      <img className="leafBananier" src={feuilleBananier} alt="Image de fond représentant une feuille de bananier."/>
    </div>
    <h1 className="titleHebergement">hébergement</h1>
    <section className="firstBloc">
      <div className="containerSlide">
        <Fade {...proprietes}>
          <div className="each-slide">
            <div>
              <img className="slideImage" src={photo1} alt="Exterieur de l'hôtel"/>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img className="slideImage" src={photo2} alt="Photo de chambre"/>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img className="slideImage" src={photo3} alt="Photo de chambre"/>
            </div>
          </div>
        </Fade>
      </div>
      <div className="paragraphFirstBloc">
        <h2 className="firstTextBloc">L’hotel Mimado*</h2>
        <p className="secondTextBloc">« Nous disposons de 16 charmantes chambres avec salle d'eau, ventilées ou climatisées. »</p>
        <p className="lastTextBloc">Découvrez l’ambiance, la décoration ainsi que les équipements et prix de chaque formule.</p>
      </div>
    </section>
    <section className="secondBloc">
      <div className="cardHebergement">
        <p className="cardTitle">Chambres comprenants</p>
        <div className="cardGroupPicture">
        <img className="onePictureCard" src={icone2} alt="Logo représentant un ventilateur"/>
          <img className="onePictureCard--wifi" src={icone3} alt="Logo représentant le WIFI"/>
        </div>
        <ul className="cardGroupText">
          <li className="oneTextCard">Ventilée</li>
          <li className="oneTextCard">Réseau WIFI</li>
          <li className="oneTextCard">(chambre non-fumeur)</li>
        </ul>
        <p className="priceRoom">Prix: <span>18000 CFA</span> ou <span>28€</span></p>
      </div>
      <div className="cardHebergement">
        <p className="cardTitle">Chambres comprenants</p>
        <div className="cardGroupPicture">
          <img className="onePictureCard" src={icone2} alt="Logo représentant un ventilateur"/>
          <img className="onePictureCard--wifi" src={icone3} alt="Logo représentant le WIFI"/>
          <img className="onePictureCard" src={icone4} alt="Logo représentant une télévision"/>
        </div>
        <ul className="cardGroupText">
          <li className="oneTextCard">Ventilée</li>
          <li className="oneTextCard">Télévision et <span>canal+</span></li>
          <li className="oneTextCard">Réseau WIFI</li>
          <li className="oneTextCard">(chambre non-fumeur)</li>
        </ul>
        <p className="priceRoom">Prix: <span>20000 CFA</span> ou <span>30€</span></p>
      </div>
      <div className="cardHebergement">
        <p className="cardTitle">Chambres comprenants</p>
        <div className="cardGroupPicture">
          <img className="onePictureCard" src={icone1} alt="Logo représentant un climatiseur"/>
          <img className="onePictureCard--wifi" src={icone3} alt="Logo représentant le WIFI"/>
          <img className="onePictureCard" src={icone4} alt="Logo représentant une télévision"/>
        </div>
        <ul className="cardGroupText">
          <li className="oneTextCard">Climatisée</li>
          <li className="oneTextCard">Télévision et <span>canal+</span></li>
          <li className="oneTextCard">Réseau WIFI</li>
          <li className="oneTextCard">(chambre non-fumeur)</li>
        </ul>
        <p className="priceRoom">Prix: <span>25000 CFA</span> ou <span>38€</span></p>
      </div>
    </section>
    <div className="blocBananier">
      <img className="Bananier" src={Bananier} alt="Image de fond représentant une bananier."/>
    </div>
  </div>
);

// == Export
export default Hebergement;
