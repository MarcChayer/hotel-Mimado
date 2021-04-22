// == Import npm
import React from 'react';

// == Import
import './prestation.scss';

// == Import images slideshows bloc1
import photo1 from '../../assets/images/prestation/bloc1/presta1.jpg'; 

// == Import images slideshows bloc2
import photo2 from '../../assets/images/prestation/bloc2/presta2.jpg'; 

// == Import images icone
import feuilleBananier from '../../assets/images/leafBanana.svg';
import Bananier from '../../assets/images/treeBanana.svg';

// == Composant
const Prestation = () => (
  <div className="restauration">
  <div className="maskLeafBananier">
    <img className="leafBananier" src={feuilleBananier} alt="Image de fond représentant une feuille de bananier."/>
  </div>
  <h1 className="titleRestauration">prestation</h1>
  <section className="firstBloc">
    <div className="containerSlide">
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo1} alt="Plage de l'hôtel"/>
          </div>
        </div>
    </div>
    <div className="paragraphFirstBloc">
      <h2 className="firstTextBloc">Nos services</h2>
      <p className="secondTextBloc">« L'Hôtel  Mimado* vous propose un large choix de services et prestations personnalisés pour faire de votre séjour une expérience unique. »</p>
      <ul className="lastTextBloc">
        <li>- Réception ouverte 24h/24</li>
        <li>- Wifi gratuit et illimité</li>
        <li>- Télévision avec canal+</li>
        <li>- Climatisation</li>
        <li>- Petit déjeuner, repas du midi et du soir</li>
        <li>- Bagagerie : laissez en dépôt vos valises et bagages gratuitement le jour d'arrivée ou de départ et profitez librement de votre journée.</li>
      </ul>
    </div>
  </section>
  <section className="secondBloc">
    <div className="containerSlide">
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo2} alt="Plage de l'hôtel"/>
          </div>
        </div>
    </div>
    <div className="paragraphSecondBloc">
      <h2 className="firstTextBloc">Événement et  plus</h2>
      <p className="secondTextBloc">« Vous devez séjournez longtemps dans la région ? Ou vous organnisez un évenement ? »</p>
      <p className="lastTextBloc">Pour vos activités actuelles ou futures dans la région de Kribi,  notre hôtel peut être mis à votre disposition pour des séminaires, des évènements ou pour une base de vie pour vos cadres et agents de maîtrises, travaillants dans notre région.</p>
    </div>
  </section>
  <div className="blocBananier">
    <img className="Bananier" src={Bananier} alt="Image de fond représentant une bananier."/>
  </div>
</div>
);

// == Export
export default Prestation;
